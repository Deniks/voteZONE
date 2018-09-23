import React, { Component } from 'react'

import Polls from './crud/allPolls';

export default class Vote extends Component {
  render() {
    return (
      <div>
        <Polls />
      </div>
    )
  }
}
