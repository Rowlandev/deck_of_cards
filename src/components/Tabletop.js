import React from "react";
import PlayingCard from "./PlayingCard.js";

class Tabletop extends React.Component {
  render() {
    return (
      <div>
        <PlayingCard suite="Hearts" value="A"/>
      </div>
    );
  }
}

export default Tabletop;
