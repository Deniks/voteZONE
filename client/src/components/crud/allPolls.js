import React, { Component, createRef } from 'react'
import { connect } from 'react-redux';

import Poll from './poll';

class Polls extends Component {
  constructor(props) {
    super(props);
    this.poll = createRef();
    this.allPolls = createRef();
  }
  componentDidMount() {
    const poll = this.poll.current;
    const allPolls = this.allPolls.current;
    if (!this.onLoad(poll)) {
      allPolls.innerHTML = '<h1 style="color: #ffffff">Sorry no polls ...</h1>';
    }
  }
  onLoad = (el) => {
    return el;
  }
  render() {
    return (
      <div ref={this.allPolls}>
        {console.log(this.props.polls)}
        {this.props.polls.map((poll) => <Poll ref={this.poll} key={poll.id} poll={poll} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    polls: state
  }
}
export default connect(mapStateToProps)(Polls);