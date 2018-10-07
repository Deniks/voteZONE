import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import axios from 'axios';
import Polls from '../containers/allPolls';


class Vote extends Component {
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
        <Polls>
          <SubscribeButton/>
        </Polls>
      </div>
    )
  }
}

export default connect()(Vote);