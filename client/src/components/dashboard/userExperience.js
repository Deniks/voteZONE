import React, { Component } from 'react'
import M from 'materialize-css';
import uuid from 'uuid';
export default class UserExperience extends Component {
  constructor(props) {
      super(props);
      this.userName = React.createRef();
      this.parallax = React.createRef();
      this.state = {
          users: []
      }
  }


  componentDidMount() {

    fetch('/api/users')
        .then(response => {
            if (response.status !== 200) {
                console.log(`Look like there was a problem. Status Code: ${response.status}`)
                return;
            }
            response.json().then(data => {
                let output = '<div>';
                let state = this.state.users;
                const valArr = [];

                for (let i in data) {
                    valArr.push(data[i].username);
                }

                state.push(valArr);
                state = state[0];
                this.setState({ users: state });
                
                for (let i=0; i<state.length; i++) {
                    output  += `<li>${state[i]}</li>`;
                }
                
                output += '</div>';
                this.userName.current.innerHTML = output;
            })
        })
        .catch(err => console.log(`Fetch Error :-s${err}`));
        
    M.Parallax.init(this.parallax.current, {});
  }

  render() {
    return (
      <div>
        <div className="profile" >
            <div className="profile-background-image parallax-container">
                <div style={{zIndex: "1"}} ref={this.parallax} className="parallax"><img alt="Your profile image is not loaded yet" src="http://t.wallpaperweb.org/wallpaper/nature/1920x1080/Best_Real_World_Full_HD_0025.jpg" /></div>                
            </div>
            <div className="container">
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "30vw",
                    position: "relative",
                    top: "0",
                    color: "#fff"
                }}><i className="material-icons circle grey large">face</i>
                    <div className="userPersonalInfo right">
                        <div className="progress">
                            <div className="determinate" style={{width: "70%"}}></div>
                        </div>
                        <div ref={this.userName} className="userName" name="username">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
