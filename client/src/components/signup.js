import React from 'react'

const SignUp = () => {
  return (
    <form action="/users/sign-up" method="POST">
      <div className="row">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" name="firstName" />
                <label forhtml="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" name="lastName" />
                <label forhtml="last_name">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" className="validate" name="username" />
                <label forhtml="first_name">Username</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" name="email" />
                <label forhtml="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input id="password" type="password" className="validate" name="password" />
                <label forhtml="password">Password</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input id="password" type="password" className="validate" name="password2" />
                <label forhtml="password">Confirm</label>
              </div>
            </div>
            <button type="submit" name="action" ref={this.loginButton} className="btn btn-small right blue darken-4"><i className="material-icons">arrow_forward</i></button>
      </div>
    </form>
  )
}

export default SignUp
