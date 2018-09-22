import React, { Component, createRef } from 'react';
import M from 'materialize-css';

export default class CreatePoll extends Component {
  constructor(props) {
      super(props);
      this.switcher = createRef(); 
      this.range = createRef();
      this.datepicker = createRef();
  }
  componentDidMount() {
    let datePicker = this.datepicker.current;
    let instances = M.Datepicker.init(datePicker, {
        parse: el => console.log(el),
        format: "yyyy dd, mmm" 
    });
  }
  onSwitch = () => {
    const switcher = this.switcher.current;
    const range = this.range.current;
    if (switcher.checked) {
        range.style.display = "block";
    }
    if (!switcher.checked) {
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
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate" />
                            <label htmlFor="icon_prefix">Title</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">phone</i>
                            <textarea id="textarea" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea">Description</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">date_range</i>
                            <input type="text" placeholder="Vote end date" className="datepicker white-text" ref={this.datepicker}/>
                        </div>
                        <div className="col s12">
                            Voting Limit
                            <div className="switch right">
                                <label ref={this.label}>
                                    Off
                                    <input ref={this.switcher} type="checkbox" onChange={this.onSwitch} />
                                    <span className="lever blue darken-4"></span>
                                    On
                                </label>
                            </div>
                            <p ref={this.range} style={{display: "none"}} className="range-field">
                                <input type="range" id="test5" min="0" max="100" />
                            </p>
                        </div>

                        <div className="col s12">
                            <div>
                            <button className="btn waves-effect waves-light blue darken-4 right" type="submit" name="action">Submit
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


