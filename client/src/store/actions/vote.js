import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import axios from 'axios';
import Polls from '../containers/allPolls';


class Vote extends Component {
  componentDidMount() {
    fetch('/api/polls')
      .then(response => {
      if (response.status !== 200) {
        console.log(`Look like there was a problem. Status Code: ${response.status}`)
        return;
      }
      response.json().then(data => {
        console.log(data);
      })
      })
      .catch(err => console.log(`Fetch Error :-s${err}`));
  }
  handleSubscription = el => {
    el.preventDefault();
    const data = {
      id: uuid(),
    }
    this.props.dispatch({
      type: 'MAKE_SUBSCRIPTION',
      data
    });
  }
  render() {
    const SubscribeButton = (props) => {
      return (
        <a onClick={this.handleSubscription} className="right blue darken-4 waves-effect waves-light btn-large"><i className="material-icons right">add</i>Subscribe</a>
      );
    }
    return (
      <div>
        <Polls content="haha">
          <SubscribeButton/>
        </Polls>
      </div>
    )
  }
}

export default connect()(Vote);