import React, { Component } from 'react'
import M from 'materialize-css';
import uuid from 'uuid';
export default class UserExperience extends Component {
  constructor(props) {
      super(props);
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
                data.key = uuid()
                this.setState({ users: data })
            })
            .then(console.log(this.state.users));
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
                        <div className="userName" name="username">
                            { this.state.users}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
