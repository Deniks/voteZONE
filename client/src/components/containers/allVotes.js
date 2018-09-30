import React, { Component, createRef } from 'react'
import { connect } from 'react-redux';

import Vote from '../actions/vote';
import Poll from '../actions/poll';

class Votes extends Component {
  constructor(props) {
    super(props);
    this.subscription = createRef();
    this.allVotes = createRef();
  }
  componentDidMount() {
    const subscription = this.subscription.current;
    const allVotes = this.allVotes.current;
    if (!this.onLoad(subscription)) {
      allVotes.innerHTML = '<h1 style="color: #ffffff">Failed to receive your subscriptions ...</h1>';
    }
  }
  onLoad = (el) => {
    return el;
  }
  render() {
    return (
      <div ref={this.allVotes} >
        {console.log(this.props.votes)}
        {this.props.votes.map(subscription => <Poll></Poll>)}
        {/*this.props.polls.map((poll) => <Poll subscribeBtn={this.props.children} ref={this.subscription} key={poll.id} poll={poll} />)*/}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  votes: state.subscriptionReducer // Notice TodoApp is used instead of todos
});

export default connect(mapStateToProps)(Votes);