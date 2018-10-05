import React, { Component, Fragment } from 'react'
import uuid from 'uuid';
import moment from 'moment';

export default class Poll extends Component {
  render() {
    return (
      <div className="poll">
        <div className="row">
            <div className="col s12 m6">
                <div className="card grey darken-4">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.poll.title}</span>
                        <p>{this.props.poll.description}</p>
                        <form action="#">
                                    {this.props.poll.choices.map(choice => {
                                        const RadioBtn = props => {
                                            return (
                                                <label>
                                                    <input name="group1" type="radio"/>
                                                    <span>{choice}</span>
                                                </label>
                                            );
                                        }
                                        let p = React.createElement('p', {key: uuid() }, <RadioBtn />)
                    
                                        return p;
                                    })}
                        </form>
                        <span className="right">{this.props.poll.date}</span>

                    </div>
                    <div className="card-action">
                        <div>
                            {this.props.poll.hashtags.map(el => {
                                let a = React.createElement(
                                    'a',
                                    null,
                                    el
                                );
                                return '#' + el + '  ';
                            })}
                        </div>
                        {this.props.subscribeBtn}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
