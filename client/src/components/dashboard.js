import React, { Component } from 'react'
import Polls from './crud/allPolls';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Polls />        
      </div>
    )
  }
}
