import React, { Component, createRef } from 'react';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.usernameField = createRef();
    this.passwordField = createRef();
    this.loginButton = createRef();
  }
  componentDidUpdate() {
    if (!(this.usernameField.current.value && this.passwordField.current.value)) {
      this.loginButton.current.style.display = "none";
    }
  }
  passToProps = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <textarea ref={this.usernameField} id="icon_prefix2" className="materialize-textarea"></textarea>
            <label forhtml="icon_prefix2">Username</label>
          </div>
  
          <div className="input-field col s12">
            <i className="material-icons prefix">lock</i>
            <input ref={this.passwordField} id="password" type="password" className="validate" />
            <label forhtml="password">Password</label>
          </div>
          <div type="submit" name="action" onClick={this.passToProps} ref={this.loginButton} className="btn blue darken-4 btn-small right"><i className="material-icons">arrow_forward</i></div>
      </div>
    )
  }

}

export default LogIn;
