import React, { Component } from 'react'
import M from 'materialize-css';

export default class UserExperience extends Component {
  constructor(props) {
      super(props);
      this.parallax = React.createRef();
  }
  componentDidMount() {
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
                        <div className="userName">
                            Denis Rezanovich
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
