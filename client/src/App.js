import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/app.css';
import 'normalize.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons';

import Home from './components/home/home';
import CreatePoll from './components/crud/createPoll';
import Navbar from './components/navbar';
import Chart from './components/chart';
import Dashboard from './components/dashboard';
import Vote from './components/vote';

class App extends Component {
  render() {
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