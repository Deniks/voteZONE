import React, { Component, createRef } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Poll from '../actions/poll';

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
      <div ref={this.allPolls} >
        {console.log(this.props.polls)}
        {this.props.polls.map((poll) => <Link to={`/vote/:id`}><Poll subscribeBtn={this.props.children} ref={this.poll} key={poll.id} poll={poll} /></Link>)}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  polls: state.pollReducer // Notice TodoApp is used instead of todos
});
/*const mapStateToProps = state => {
  return {
    polls: state
  }
} */
export default connect(mapStateToProps)(Polls);