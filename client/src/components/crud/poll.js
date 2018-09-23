import React, { Component, Fragment } from 'react'
import uuid from 'uuid';

export default class Poll extends Component {

  render() {
    const Date = () => {
        const oneDay = 24 * 60 * 60 * 1000;
        const currentDate = new Date();
        const userDate = new Date(this.props.poll.date);
        console.log(currentDate);
        const days = (userDate.getTime() - currentDate.getTime()) / (oneDay);
        const hours = (days - Math.floor(days)) * 24;
        const min = (hours - Math.floor(hours)) * 60;
        return (
            <Fragment>
                {days}
            </Fragment>
        );
    }
    return (
      <div className="poll">
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
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
                        <span className="right">{new Date().getTime()}</span>

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
                        <a className="right blue darken-4 waves-effect waves-light btn-large"><i className="material-icons right">add</i>Subscribe</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
