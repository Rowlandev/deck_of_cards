import React from "react";
import PlayingCard from "./PlayingCard.js";
import HelpButton from "./HelpButton.js";

class Tabletop extends React.Component {
  render() {
    return (
      <div>
        <HelpButton/>
        <PlayingCard suite="heart" value="5" color="red"/>
      </div>
    );
  }
}

export default Tabletop;
