import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import moment from 'moment';
import uuid from 'uuid';

class CreatePoll extends Component {
  constructor(props) {
      super(props);
      this.newChoicesHandler = createRef();
      this.maxVotingValue = createRef();
      this.votingLimitCounter = createRef();
      this.range = createRef();
      this.rangeZone = createRef();
      this.date = createRef();
      this.title = createRef();
      this.description = createRef();
      this.limit = createRef();
      this.globality = createRef();
      this.pollType = createRef();
      this.chip = createRef();
      this.modal = createRef();
      this.modalChild = createRef();
      this.modalContent = createRef();
      this.choices = createRef();
  }
  componentDidMount() {
    M.Datepicker.init(this.date.current, {
        minDate: new Date()
    });
    M.Chips.init(this.chip.current, {
        placeholder: "Enter Hashtag",
        onChipAdd: this.chipsForInput,
        onChipDelete: this.chipsForInput,
    });
    M.Modal.init(this.modal.current, {});
  }
  chipsForInput = () => {
    let instance = M.Chips.getInstance(this.chip.current) 
    let inpt = [];
    for(let i=0; i<instance.chipsData.length; i++){
        inpt.push(instance.chipsData[i].tag)
    }
    return inpt;
    console.log(inpt);
  }
  handleSubmit = e => {
    e.preventDefault();
    const title = this.title.current.value;
    const description = this.description.current.value;
    const date = `finishes ${moment(this.date.current.value).fromNow()}`;
    const limit = this.limit.current.value;
    const globality = this.globality.current.value;
    const pollType = this.pollType.current.value;
    const hashtags = this.chipsForInput();
    const choices = this.writtenChoiceHandler();
    console.log(choices);
    const data = {
      id: uuid(),
      title,
      description,
      date,
      limit,
      globality,
      pollType,
      hashtags,
      choices
    }
    this.props.dispatch({
        type: 'ADD_POLL',
        data
    });

  }
  onSwitch = () => {
    
    const limit = this.limit.current;
    console.log(limit.value)
    const rangeZone = this.rangeZone.current;
    if (limit.checked) {
        rangeZone.style.display = "block";
    }
    if (!limit.checked) {
        rangeZone.style.display = "none";
    }
  }

  onProgressValueChange = (el) => {
      const range = this.range.current.firstChild;
      this.votingLimitCounter.current.value = range.value;
      range.max = this.maxVotingValue.current.value;
      console.log(range.value)
  }
  
  writtenChoiceHandler = () => {
    let choices = [];
    let newChoicesHandler = this.newChoicesHandler.current.value;
    for (let i=0; i<this.modalContent.current.childNodes.length; i++) {
        choices.push(this.modalContent.current.childNodes[i].firstChild.value);
    }
    newChoicesHandler = choices;
    return choices;
  }
  addChoice = () => {
    let modalChild = this.modalChild.current;
    let modalChildClone = modalChild.cloneNode(true);
    this.modalContent.current.appendChild(modalChildClone);
  }
  render() {
    return (
            <div style={{
                width: "50vw",
                height: "100vh",
                display: "flex",
                margin: "0 auto",
                textAling: "center",
                alignItems: "center"
            }}>
                <div className="row">
                    <form action="/polls/create_poll" method="POST" className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">title</i>
                                <input name="title" id="icon_prefix" type="text" className="white-text validate" ref={this.title} />
                                <label htmlFor="icon_prefix">Title</label>
                            </div>

                            <div className="input-field col s12">
                                <i className="material-icons prefix">description</i>
                                <textarea name="description" id="textarea" className="white-text materialize-textarea" ref={this.description}></textarea>
                                <label htmlFor="textarea">Description</label>
                            </div>
                            <div className="input-field col s12 white-text">
                                <div className="switch right">
                                    <label ref={this.label}>
                                        For free
                                        <input ref={this.limit} type="checkbox" onChange={this.onSwitch} />
                                        <span className="lever blue darken-4"></span>
                                        Bill
                                    </label>
                                </div>
                            </div>

                            <div className="input-field col s12">
                                <i className="material-icons prefix">date_range</i>
                                <input  name="finishDate" type="text" placeholder="Vote end date" className="white-text datepicker white-text" ref={this.date}/>
                            </div>

                            <div className="input-field col s12 white-text">
                                Voting Limit                                
                                <div className="switch right">
                                    <label ref={this.label}>
                                        Off
                                        <input name="votingLimit" ref={this.limit} type="checkbox" onChange={this.onSwitch} />
                                        <span className="lever blue darken-4"></span>
                                        On
                                    </label>
                                </div>
                                <div ref={this.rangeZone} style={{display: "none"}}>
                                    <p ref={this.range} className="range-field">
                                        <input onChange={this.onProgressValueChange} type="range" id="test5" min="0" max="10000" />
                                    </p>
                                    <div className="input-field col s3 right">
                                        <input ref={this.maxVotingValue} style={{color: "#fff"}} id="icon_telephone" type="number" className="validate" />
                                        <label forhtml="icon_telephone">Max</label>
                                    </div>
                                    <div className="input-field col s3">
                                        <input ref={this.votingLimitCounter} disabled value="0" style={{color: "#fff"}} type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="input-field col s12">
                                <div className="switch right">
                                    <label>
                                        Public
                                        <input type="checkbox" ref={this.globality}/>
                                        <span className="lever blue darken-4"></span>
                                        Private
                                    </label>
                                </div>
                            </div>

                            
                            <div className="input-field col s12 white-text">
                                Poll source
                                <div className="switch right">
                                <label>
                                    Social Network
                                    <input type="checkbox" ref={this.pollType} />
                                    <span className="lever blue darken-4"></span>
                                    Own
                                </label>
                                </div>
                            </div>
                            
                            <div className="input-field col s12">
                                <a className="blue darken-4 waves-effect waves-light btn modal-trigger" href="#modal1">Setup choices</a>

                                <div ref={this.modal} id="modal1" className="modal blue darken-4 modal-fixed-footer">
                                    <div  className="modal-content">
                                        <h4>Choices</h4>
                                        <a onClick={this.addChoice} className="right black btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                                        <div ref={this.modalContent}>
                                            <div ref={this.modalChild}>
                                                <textarea id="textarea" className="choice white-text materialize-textarea"></textarea>
                                            </div>
                                            <div>
                                                <textarea id="textarea" className="choice white-text materialize-textarea"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer" onClick={this.writtenChoiceHandler}>
                                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Done</a>
                                    </div>
                                    <input name="choices" ref={this.newChoicesHandler} style={{ display: "none" }} /> 
                                </div>
                            </div>

                            <div className="input-field col s12">
                            <div className="chips chips-placeholder" ref={this.chip}></div>
                            </div>

                            <div className="col s12">
                                <div>
                                    <button className="bottom btn waves-effect waves-light blue darken-4 right" type="submit" name="action">Submit
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
      )
  }
}

export default connect()(CreatePoll);