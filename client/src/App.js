import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/app.css';
import 'normalize.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons';

import Home from './components/home/home';
import Dashboard from './components/dashboard';
import CreatePoll from './components/actions/createPoll';
import Navbar from './components/navbar';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ratings" component={Dashboard} />
            <Route path="/create_poll" component={CreatePoll} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;