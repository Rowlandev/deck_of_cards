// SYSTEM IMPORTS
import React from "react";

// IMAGE IMPORTS
import Prof1 from "../images/backs/prof1.JPG"
import Prof2 from "../images/backs/prof2.PNG"
import Prof3 from "../images/backs/prof3.JPG"
import Tim from "../images/backs/tim.PNG"
import Flavortown from "../images/backs/flavortown.PNG"
import NickCage from "../images/backs/nick_cage.PNG"
import TheGuy from "../images/backs/the_guy.PNG"
import Squid from "../images/backs/squid.PNG"

// CUSTOM IMPORTS
import GameButtons from "./GameButtons.js";
import Deck from "./Deck.js";
import "../css/Tabletop.css";

class Tabletop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: "mainMenu",
      showingHelpMessage: false,
      dark: false,
      img: Prof1
    };
  }

  enterSandboxMode = (e) => {
    this.setState({
      mode: "sandbox"
    })
  }

  enterSettings = (e) => {
    this.setState({
      mode: "settings"
    })
  }

  //called from GameButtons to the deck
  shuffle = (e) => {
    this.refs.deck.shuffle();
  }

  goToMainMenu = (e) => {
    this.setState({
      mode: "mainMenu"
    })
  }

  prof1Click = () => {
    this.setState({
      img: Prof1,
      mode:"mainMenu"
    })
  }
  prof2Click = () => {
    this.setState({
      img: Prof2,
      mode:"mainMenu"
    })
  }
  prof3Click = () => {
    this.setState({
      img: Prof3,
      mode:"mainMenu"
    })
  }
  timClick = () => {
    this.setState({
      img: Tim,
      mode:"mainMenu"
    })
  }
  flavortownClick = () => {
    this.setState({
      img: Flavortown,
      mode:"mainMenu"
    })
  }
  theGuyClick = () => {
    this.setState({
      img: TheGuy,
      mode:"mainMenu"
    })
  }
  nickCageClick = () => {
    this.setState({
      img: NickCage,
      mode:"mainMenu"
    })
  }
  squidClick = () => {
    this.setState({
      img: Squid,
      mode:"mainMenu"
    })
  }


  // darken Tabletop to create modal effect
  darkenTabletop() {
    console.log("darken");
  }

  render() {
    return (
      <div id='display'>
      {this.state.mode === "mainMenu" &&
          <div id='main-menu'>
            <p id="title">deck_of_cards</p>
            <p id="creators">By: Braden Batman, Chase Grainger, and Matthew Heck</p>
            <p><button className="button" onClick={this.enterSandboxMode}>Sandbox Mode</button></p>
            <p><button className="button" onClick={this.enterSettings}>Settings</button></p>
            <p><button className="button" >Help</button></p>
          </div>
      }
      {this.state.mode === "sandbox" &&
          <div id="table">
            <GameButtons type="help" showing={this.state.showingHelpMessage} darkenTabletop={this.darkenTabletop} shuffle={this.shuffle} goToMainMenu={this.goToMainMenu} />
            <Deck ref="deck" img={this.state.img}/>
          </div>
      }
      {this.state.mode === "settings" &&
          <div id="settings-menu">
            <p id="settings-title">Choose your fighter...</p>
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
      }
      </div>
    );
  }
}

export default Tabletop;
