import React from "react";
import PlayingCard from "./PlayingCard.js";

class Tabletop extends React.Component {
  render() {
    return (
      <div>
        <PlayingCard suite="heart" value="A" color="red"/>
      </div>
    );
  }
}

export default Tabletop;
