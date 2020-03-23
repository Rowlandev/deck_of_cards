// SYSTEM IMPORTS
import React from "react";

// CUSTOM IMPORTS
import HelpButton from "./HelpButton.js";
import Deck from "./Deck.js";

class Tabletop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingHelpMessage: false,
      dark: false
    };
  }

  // darken Tabletop to create modal effect
  darkenTabletop() {
    console.log("darken");
  }

  render() {
    return (
      <div id='tabletop'>
        <HelpButton showing={this.state.showingHelpMessage} darkenTabletop={this.darkenTabletop}/>
        <Deck/>
      </div>
    );
  }
}

export default Tabletop;
