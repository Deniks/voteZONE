import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/app.css';
import 'normalize.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons';

import Home from './components/home/home';
import CreatePoll from './store/actions/createPoll';
import Navbar from './components/navbar';
import Chart from './components/chart';
import Dashboard from './components/dashboard/dashboard';
import Vote from './store/actions/vote';

class App extends Component {
  state = {
    response: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }
  render() {
    console.log(this.state.response)
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create_poll" component={CreatePoll} />
            <Route path="/chart" component={Chart} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/vote" component={Vote} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;