import React, { Component, createRef } from 'react'
import M from 'materialize-css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../../styles/dashboard.css'
import Polls from '../../store/containers/allPolls';
import UserExperience from './userExperience';
import ActivePolls from './activePolls';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Router>
            <main>
              <Switch>
                <Route exact path="/stats/profile" component={UserExperience} />
                <Route path="/stats/active" component={ActivePolls} />
                <Route path="/stats/own" component={Polls} />
              </Switch>
              <div className="sidebar" style={{
                position: "fixed",
                left: "0",
                bottom: "0",
                width: "100vw"
              }}>
                <div className="row" style={{marginBottom: "0"}}>
                    <div className="col s12">
                      <ul className="tabs" style={{background: "none"}}>
                        <li className="tab col s3 m1 l4"><Link to="/stats/profile">profile</Link></li>
                        <li className="tab col s3 m1 l4"><Link to="/stats/active">active</Link></li>
                        <li className="tab col s3 m1 l4"><Link to="/stats/own">own</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
          </main>
        </Router>
      </div>
    )
  }
}
