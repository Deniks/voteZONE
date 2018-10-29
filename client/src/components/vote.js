import React, { Component, createRef } from 'react';
import Poll from './poll';

class Vote extends Component {
  constructor(props) {
      super(props);
      this.state = {
          poll: [],
      }
  }
  componentDidMount() {
    const getNestedObject = (nestedObj, pathArr) => {
        return pathArr.reduce((obj, key) =>
            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
    }
    fetch('/api/polls')
      .then(response => {
        if (response.status !== 200) {
          console.log(`Look like there was a problem. Status Code: ${response.status}`)
          return;
        }
        response.json().then(data => {
          const resData = JSON.parse(JSON.stringify(data, null, 2));
          let allPolls = [];
          for (let i=0; i<resData.length; i++) {
            allPolls.push(resData[i]);
          }
          this.setState({
            poll: allPolls
          })
          console.log(this.state.poll)
        })
      }).catch(err => console.log(`Fetch Error :-s${err}`))     
  }
  
  handleSubscription = el => {
    el.preventDefault();
  }
  render() {
    const SubscribeButton = (props) => (
        <a onClick={this.handleSubscription} className="right blue darken-4 waves-effect waves-light btn-large"><i className="material-icons right">add</i>Subscribe</a>
    )

    return (
      <div>
        {this.state.poll.map((anObjectMapped, index) => {
          return (<Poll
            key={anObjectMapped._id} 
            title={anObjectMapped.title}
            description={anObjectMapped.description}
            choices={anObjectMapped.choices}
            date={anObjectMapped.finishDate}
            hashtags={anObjectMapped.hashtags}
            subscribeButton={<SubscribeButton />}
          />)
        })}
      </div>
    )
  }
}

export default Vote;