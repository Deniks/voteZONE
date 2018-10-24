import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';

import M from 'materialize-css';

export default class SideNav extends Component {
    constructor(props) {
        super(props);
        this.sidenav = createRef();
    }
    componentDidMount() {
        M.Sidenav.init(this.sidenav.current, {

        });
    }
    render() {
        return (
            <ul ref={this.sidenav} class="sidenav" id="mobile-demo">
              <li><Link to="/polls/create_poll">Create<i className="right material-icons">add</i></Link></li>
              <li><Link to="/polls/vote">Vote<i className="right material-icons">create</i></Link></li>
              <li><Link to="/chart">Ratings<i className="right material-icons">star_rate</i></Link></li>
              <li><Link to="/dashboard">Dashboard<i className="right material-icons">dashboard</i></Link></li>
              <li>{this.props.logout}</li>
            </ul>
        )
    }
}

