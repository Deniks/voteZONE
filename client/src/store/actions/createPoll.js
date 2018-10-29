import React, { Component, createRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css';
import moment from 'moment';
import uuid from 'uuid';

import Title from '../../components/pollForm/title';
import Description from '../../components/pollForm/description';
import DateRange from '../../components/pollForm/dateRange';
import VotingLimit from '../../components/pollForm/votingLimit';
import Choices from '../../components/pollForm/choices';
import Confirm from '../../components/pollForm/confirm';
import Globality from '../../components/pollForm/globality';
import PollCost from '../../components/pollForm/pollCost';
import PollOrigin from '../../components/pollForm/pollOrigin';
import Hashtags from '../../components/pollForm/hashtags';

class CreatePoll extends Component {
  constructor(props) {
      super(props);
     // this.child1 = createRef();
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
  //    this.pollType = createRef();
      this.chip = createRef();
      this.modal = createRef();
      this.modalChild = createRef();
      this.modalContent = createRef();
      this.choices = createRef();
  }
  componentDidMount() {
   // let date = this.child1.refs.date;
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
  //  const pollType = this.pollType.current.value;
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
  //    pollType,
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
                    <form action="/polls/create_poll" method="POST" className="col s12" >
                        <div className="row">
                            <Title title={this.title} />
                            <Description description={this.description} />

                            <div className="input-field col s12 white-text">
                                <PollCost 
                                    label={this.label}
                                    limit={this.limit}
                                    onSwitch={this.onSwitch}
                                />
                            </div>

                            <div className="input-field col s12">
                                <DateRange setRef={this.date} />
                            </div>

                            <div className="input-field col s12 white-text">
                                <VotingLimit 
                                    label={this.label}
                                    limit={this.limit}
                                    onSwitch={this.onSwitch}
                                    rangeZone={this.rangeZone}
                                    range={this.range}
                                    onProgressValueChange={this.onProgressValueChange}
                                    maxVotingValue={this.maxVotingValue}
                                    votingLimitCounter={this.votingLimitCounter}
                                />
                            </div>
                            <div className="input-field col s12">
                                <Globality globality={this.globality} />
                            </div>

                            
                            <div className="input-field col s12 white-text">
                                <PollOrigin globality={this.globality} />
                            </div>
                            
                            <div className="input-field col s12">
                                <Choices 
                                    modal={this.modal} 
                                    modalContent={this.modalContent} 
                                    modalChild={this.modalChild}
                                    newChoicesHandler={this.newChoicesHandler}
                                    writtenChoiceHandler={this.writtenChoiceHandler}
                                    addChoice={this.addChoice}
                                />
                            </div>

                            <div className="input-field col s12">
                                <Hashtags chip={this.chip} />
                            </div>

                            <div className="col s12">
                                <Confirm />
                            </div>
                        
                        </div>
                    </form>
                </div>
            </div>
      )
  }
}

export default connect()(CreatePoll);