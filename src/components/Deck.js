// SYSTEM IMPORTS
import React from "react";

// CUSTOM IMPORTS
import PlayingCard from "./PlayingCard.js";

class Deck extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      suit: ["heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "club", "club", "club", "club", "club", "club", "club", "club", "club", "club", "club", "club", "club", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade"],
      value: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
    };
  }

  shuffle = () => {
    // TODO
    // I think it will be easiest if we change how the card values/suits are stored to an array
    // so we can loop through all of them easier
  }

  render() {
    return (
      <div id='deck'>
        <PlayingCard suit={this.state.suit[0]} value={this.state.value[0]}/>
        <PlayingCard suit={this.state.suit[1]} value={this.state.value[1]}/>
        <PlayingCard suit={this.state.suit[2]} value={this.state.value[2]}/>
        <PlayingCard suit={this.state.suit[3]} value={this.state.value[3]}/>
        <PlayingCard suit={this.state.suit[4]} value={this.state.value[4]}/>
        <PlayingCard suit={this.state.suit[5]} value={this.state.value[5]}/>
        <PlayingCard suit={this.state.suit[6]} value={this.state.value[6]}/>
        <PlayingCard suit={this.state.suit[7]} value={this.state.value[7]}/>
        <PlayingCard suit={this.state.suit[8]} value={this.state.value[8]}/>
        <PlayingCard suit={this.state.suit[9]} value={this.state.value[9]}/>
        <PlayingCard suit={this.state.suit[10]} value={this.state.value[10]}/>
        <PlayingCard suit={this.state.suit[11]} value={this.state.value[11]}/>
        <PlayingCard suit={this.state.suit[12]} value={this.state.value[12]}/>
        <PlayingCard suit={this.state.suit[13]} value={this.state.value[13]}/>
        <PlayingCard suit={this.state.suit[14]} value={this.state.value[14]}/>
        <PlayingCard suit={this.state.suit[15]} value={this.state.value[15]}/>
        <PlayingCard suit={this.state.suit[16]} value={this.state.value[16]}/>
        <PlayingCard suit={this.state.suit[17]} value={this.state.value[17]}/>
        <PlayingCard suit={this.state.suit[18]} value={this.state.value[18]}/>
        <PlayingCard suit={this.state.suit[19]} value={this.state.value[19]}/>
        <PlayingCard suit={this.state.suit[20]} value={this.state.value[20]}/>
        <PlayingCard suit={this.state.suit[21]} value={this.state.value[21]}/>
        <PlayingCard suit={this.state.suit[22]} value={this.state.value[22]}/>
        <PlayingCard suit={this.state.suit[23]} value={this.state.value[23]}/>
        <PlayingCard suit={this.state.suit[24]} value={this.state.value[24]}/>
        <PlayingCard suit={this.state.suit[25]} value={this.state.value[25]}/>
        <PlayingCard suit={this.state.suit[26]} value={this.state.value[26]}/>
        <PlayingCard suit={this.state.suit[27]} value={this.state.value[27]}/>
        <PlayingCard suit={this.state.suit[28]} value={this.state.value[28]}/>
        <PlayingCard suit={this.state.suit[29]} value={this.state.value[29]}/>
        <PlayingCard suit={this.state.suit[30]} value={this.state.value[30]}/>
        <PlayingCard suit={this.state.suit[31]} value={this.state.value[31]}/>
        <PlayingCard suit={this.state.suit[32]} value={this.state.value[32]}/>
        <PlayingCard suit={this.state.suit[33]} value={this.state.value[33]}/>
        <PlayingCard suit={this.state.suit[34]} value={this.state.value[34]}/>
        <PlayingCard suit={this.state.suit[35]} value={this.state.value[35]}/>
        <PlayingCard suit={this.state.suit[36]} value={this.state.value[36]}/>
        <PlayingCard suit={this.state.suit[37]} value={this.state.value[37]}/>
        <PlayingCard suit={this.state.suit[38]} value={this.state.value[38]}/>
        <PlayingCard suit={this.state.suit[39]} value={this.state.value[39]}/>
        <PlayingCard suit={this.state.suit[40]} value={this.state.value[40]}/>
        <PlayingCard suit={this.state.suit[41]} value={this.state.value[41]}/>
        <PlayingCard suit={this.state.suit[42]} value={this.state.value[42]}/>
        <PlayingCard suit={this.state.suit[43]} value={this.state.value[43]}/>
        <PlayingCard suit={this.state.suit[44]} value={this.state.value[44]}/>
        <PlayingCard suit={this.state.suit[45]} value={this.state.value[45]}/>
        <PlayingCard suit={this.state.suit[46]} value={this.state.value[46]}/>
        <PlayingCard suit={this.state.suit[47]} value={this.state.value[47]}/>
        <PlayingCard suit={this.state.suit[48]} value={this.state.value[48]}/>
        <PlayingCard suit={this.state.suit[49]} value={this.state.value[49]}/>
        <PlayingCard suit={this.state.suit[50]} value={this.state.value[50]}/>
        <PlayingCard suit={this.state.suit[51]} value={this.state.value[51]}/>
      </div>
    );
  }
}

export default Deck;
