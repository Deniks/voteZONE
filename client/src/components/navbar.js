import React from 'react'
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTranition } from 'react-transition-group';
import Logout from './logout';
import SideNav from './sidenav';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="transparent z-depth-5">
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo">voteZONE</Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/polls/create_poll">Create<i className="right material-icons">add</i></Link></li>
              <li><Link to="/polls/vote">Vote<i className="right material-icons">create</i></Link></li>
              <li><Link to="/chart">Ratings<i className="right material-icons">star_rate</i></Link></li>
              <li><Link to="/stats/profile">Dashboard<i className="right material-icons">dashboard</i></Link></li>
              <li><Logout /></li>
            </ul>
        </div>
      </nav>
      <SideNav logout={<Logout />} />
    </div>
  )
}

export default Navbar;
