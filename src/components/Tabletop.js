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
import SandboxDeck from "./SandboxDeck.js";
import WarDeck from "./WarDeck.js";
import Customize from "./Customize.js"
import "../css/Tabletop.css";

class Tabletop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: "mainMenu",
      showingHelpMessage: false,
      dark: false,
      img: Prof1,
    };
  }

  enterCustomize = (e) => {
    this.setState({
      mode: "customize"
    })
  }

  enterChoosingLayout = (e) => {
    this.setState({
      mode: "choosingLayout"
    });
  }

  //called from GameButtons to the sandbox deck
  shuffle = (e) => {
    this.refs.sandboxDeck.shuffle();
  }

  //called form Gamebuttons to the war deck
  resetWarDeck = (e) => {
    this.refs.warDeck.reset();
  }

  goToMainMenu = (e) => {
    this.setState({
      mode: "mainMenu"
    })
  }

  changeImg = (img) => {
    this.setState({
      img: img
    })
  }

  /* Update Card Layouts */
  enterSandboxMode = () => {
    this.setState({
      mode: 'sandbox'
    });
  }

  enterGameMenu = () => {
    this.setState({
      mode: 'choosingGame'
    })
  }

  enterWar = () => {
    this.setState({
      mode: 'war'
    })
  }

  render() {

    return (
      <div id='display'>

      {/* Main Menu */}
      {this.state.mode === "mainMenu" &&
          <div className='main-menu'>
            <p id="title">deck_of_cards</p>
            <p id="creators">By: Braden Batman, Chase Grainger, and Matthew Heck</p>
            <p><button className="button" onClick={this.enterGameMenu}>Play Game</button></p>
            <p><button className="button" onClick={this.enterSandboxMode}>Sandbox Mode</button></p>
            <p><button className="button" onClick={this.enterCustomize}>Customize</button></p>
            <p><button className="button">Help</button></p>
          </div>
      }

      {/* Sandbox Mode */}
      {this.state.mode === "sandbox" &&
          <div id="table">
            <GameButtons type="help" showing={this.state.showingHelpMessage} shuffle={this.shuffle} goToMainMenu={this.goToMainMenu}/>
            <SandboxDeck ref="sandboxDeck" img={this.state.img}/>
          </div>
      }

      {/* Choose Your Fighter */}
      {this.state.mode === "customize" &&
          <div id="customize">
            <Customize goToMainMenu={this.goToMainMenu} changeImg={this.changeImg}/>
          </div>
      }

      {/* Choose Custom Sandbox Layout */}
      {this.state.mode === "choosingGame" &&
      <div className="main-menu">
        <p id="title">Choose Your Game Mode</p>
        <div>
          <p><button className="button" onClick={this.enterWar}>War</button></p>
        </div>
      </div>
      }

      {/* Choose Custom Sandbox Layout */}
      {this.state.mode === "war" &&
      <div id="war-table">
        <GameButtons type="help" showing={this.state.showingHelpMessage} shuffle={this.resetWarDeck} goToMainMenu={this.goToMainMenu} helpText={this.state.helpText}/>
        <WarDeck ref="warDeck" img={this.state.img}/>
      </div>
      }

      </div>
    );
  }
}

export default Tabletop;
