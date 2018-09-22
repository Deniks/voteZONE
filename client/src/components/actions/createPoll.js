import React, { Component, createRef } from 'react';
import M from 'materialize-css';

export default class CreatePoll extends Component {
  constructor(props) {
      super(props);
      this.range = createRef();
      this.date = createRef();
      this.title = createRef();
      this.description = createRef();
      this.limit = createRef();
      this.globality = createRef();
  }
  componentDidMount() {
    let datePicker = this.date.current;
    let instances = M.Datepicker.init(datePicker, {
        
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const title = this.title.current.value;
    const description = this.description.current.value;
    const date = this.date.current.value;
    const limit = this.limit.current.value;
    const globality = this.globality.current.value;
    const data = {
      id: new Date(),
      title,
      description,
      date,
      limit,
      globality
    }
    console.log(data);
  }
  onSwitch = () => {
    const limit = this.limit.current;
    const range = this.range.current;
    if (limit.checked) {
        range.style.display = "block";
    }
    if (!limit.checked) {
        range.style.display = "none";
    }
  }

  render() {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">title</i>
                            <input id="icon_prefix" type="text" className="white-text validate" ref={this.title} />
                            <label htmlFor="icon_prefix">Title</label>
                        </div>

                        <div className="input-field col s12">
                            <i className="material-icons prefix">description</i>
                            <textarea id="textarea" className="white-text materialize-textarea" ref={this.description}></textarea>
                            <label htmlFor="textarea">Description</label>
                        </div>

                        <div className="input-field col s12">
                            <i className="material-icons prefix">date_range</i>
                            <input type="text" placeholder="Vote end date" className="white-text datepicker white-text" ref={this.date}/>
                        </div>

                        <div className="input-field col s12">
                            Voting Limit
                            <div className="switch right">
                                <label ref={this.label}>
                                    Off
                                    <input ref={this.limit} type="checkbox" onChange={this.onSwitch} />
                                    <span className="lever blue darken-4"></span>
                                    On
                                </label>
                            </div>
                            <p ref={this.range} style={{display: "none"}} className="range-field">
                                <input type="range" id="test5" min="0" max="100" />
                            </p>
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


