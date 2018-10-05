import React, { Component } from 'react'
import Votes from '../../store/containers/allVotes';
    
export default class ActivePolls extends Component {
  render() {
    return (
      <div>
        <Votes />
      </div>
    )
  }
}
