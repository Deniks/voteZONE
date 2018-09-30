import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import '../../styles/home.css';
import Theme from './theme';
import LogIn from './login';
import SignUp from './signup';

const Home = () => {
  return (
    <Router>
      <div className="home">
        <Theme />
        <main className="home-main">
        <div className="row">
          <form className="col s12">
            <div className="card-panel transparent z-depth-4">
              <div className="card-tabs">
                <ul className="tabs transparent tabs-fixed-width">
                  <li className="tab"><Link to="/log-in" className="active">Log In</Link></li>
                  <li className="tab"><Link to="/sign-up">Sign Up</Link></li>
                </ul>
              </div>
              <Switch>
                <Route exact path="/log-in" component={LogIn} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </form>
        </div>
        </main>
      </div>
    </Router>
  )
}

export default Home
