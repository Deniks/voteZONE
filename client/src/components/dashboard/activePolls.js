import React, { Component } from 'react'
import Poll from '../poll';

export default class ActivePolls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePolls: []
    }
  }
  componentDidMount() {
    fetch('/api/polls')
    .then(response => {
        if (response.status !== 200) {
            console.log(`Coudnt receive polls. Response status - ${response.status}`)
            return;
        }
        response.json().then(data => {
            const resData = JSON.parse(JSON.stringify(null, data, 2))
            console.log(resData)
        })
        .catch(err => console.log(`ERROR, check userExperience component, ===> ${err}`))
    })
  }
  render() {
    return (
      <div>
        {this.state.activePolls.map((anObjectMapped, index) => (
          <Poll
             />
        ))}
      </div>
    )
  }
}
