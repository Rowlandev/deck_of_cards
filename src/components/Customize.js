// SYSTEM IMPORTS
import React from "react";

import "../css/Customize.css";

// IMAGE IMPORTS
import Prof1 from "../images/backs/prof1.JPG"
import Prof2 from "../images/backs/prof2.PNG"
import Prof3 from "../images/backs/prof3.JPG"
import Tim from "../images/backs/tim.PNG"
import Flavortown from "../images/backs/flavortown.PNG"
import NickCage from "../images/backs/nick_cage.PNG"
import TheGuy from "../images/backs/the_guy.PNG"
import Squid from "../images/backs/squid.PNG"

class Customize extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  prof1Click = () => {
    this.props.changeImg(Prof1);
    this.props.goToMainMenu();
  }
  prof2Click = () => {
    this.props.changeImg(Prof2)
    this.props.goToMainMenu()
  }
  prof3Click = () => {
    this.props.changeImg(Prof3)
    this.props.goToMainMenu()
  }
  timClick = () => {
    this.props.changeImg(Tim)
    this.props.goToMainMenu()
  }
  flavortownClick = () => {
    this.props.changeImg(Flavortown)
    this.props.goToMainMenu()
  }
  theGuyClick = () => {
    this.props.changeImg(TheGuy)
    this.props.goToMainMenu()
  }
  nickCageClick = () => {
    this.props.changeImg(NickCage)
    this.props.goToMainMenu()
  }
  squidClick = () => {
    this.props.changeImg(Squid)
    this.props.goToMainMenu()
  }

  render() {
    return (
      <div id="customize-menu">
        <p id="customize-title">Choose your fighter...</p>
        <div id="card-choices">
          <p><img className="card-backs" alt="card back" src={Prof1} onClick={this.prof1Click}/>
             <img className="card-backs" alt="card back" src={Prof2} onClick={this.prof2Click}/>
             <img className="card-backs" alt="card back" src={Prof3} onClick={this.prof3Click}/>
             <img className="card-backs" alt="card back" src={Tim} onClick={this.timClick}/>
          </p>
          <p><img className="card-backs" alt="card back" src={Flavortown} onClick={this.flavortownClick}/>
             <img className="card-backs" alt="card back" src={TheGuy} onClick={this.theGuyClick}/>
             <img className="card-backs" alt="card back" src={NickCage} onClick={this.nickCageClick}/>
             <img className="card-backs" alt="card back" src={Squid} onClick={this.squidClick}/>
          </p>
          </div>
      </div>
    );
  }
}

export default Customize;
