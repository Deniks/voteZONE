import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="transparent z-depth-5">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">voteZONE</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/create_poll">Create<i className="right material-icons">add</i></Link></li>
            <li><Link to="/vote">Vote<i className="right material-icons">create</i></Link></li>
            <li><Link to="/ratings">Ratings<i className="right material-icons">star_rate</i></Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
