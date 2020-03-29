// SYSTEM IMPORTS
import React from "react";

// CUSTOM IMPORTS
import HelpButton from "./HelpButton.js";
import Deck from "./Deck.js";
import "../css/Tabletop.css";

class Tabletop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: "mainMenu",
      showingHelpMessage: false,
      dark: false
    };
  }

  enterSandboxMode = (e) => {
    this.setState({
      mode: "sandbox"
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
            <p><button class="button" onClick={this.enterSandboxMode}>Sandbox Mode</button></p>
            <p><button class="button" >Games (Coming Soon!)</button></p>
            <p><button class="button" >Settings</button></p>
            <p><button class="button" >Help</button></p>
          </div>
      }
      {this.state.mode === "sandbox" &&
          <div id='table'>
            <HelpButton showing={this.state.showingHelpMessage} darkenTabletop={this.darkenTabletop}/>
            <Deck/>
          </div>
      }
      </div>
    );
  }
}

export default Tabletop;
