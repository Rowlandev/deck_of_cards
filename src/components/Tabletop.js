import React from "react";
import PlayingCard from "./PlayingCard.js";
import HelpButton from "./HelpButton.js";

class Tabletop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingHelpMessage: false
    };
  }

  render() {
    return (
      <div>
        <HelpButton showing={this.state.showingHelpMessage}/>
        <PlayingCard suite="heart" value="5" color="red"/>
      </div>
    );
  }
}

export default Tabletop;
