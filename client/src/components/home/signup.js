import React from 'react'

const SignUp = () => {
  return (
    <div className="row">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label forhtml="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label forhtml="last_name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input id="first_name" type="text" className="validate" />
              <label forhtml="first_name">Username</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input id="email" type="email" className="validate" />
              <label forhtml="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input id="password" type="password" className="validate" />
              <label forhtml="password">Password</label>
            </div>
          </div>
          <div ref={this.loginButton} className="btn btn-small right blue darken-4"><i className="material-icons">arrow_forward</i></div>

    </div>
  )
}

export default SignUp
