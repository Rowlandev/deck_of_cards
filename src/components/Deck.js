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
    var tempSuitArray = this.state.suit;
    for (var i1=0; i1<this.state.suit.length; i1++){
      var rand1 = Math.floor(Math.random() * 52);
      var temp1 = tempSuitArray[rand1];
      tempSuitArray[rand1] = tempSuitArray[i1];
      tempSuitArray[i1] = temp1;
    }

    var tempValArray = this.state.value
    for (var i2=0; i2<this.state.value.length; i2++){
      var rand2 = Math.floor(Math.random() * 52);
      var temp2 = tempValArray[rand2];
      tempValArray[rand2] = tempValArray[i2];
      tempValArray[i2] = temp2;
    }

    this.setState({
      value: tempValArray,
      suit: tempSuitArray
    });
  }

  createDeck = () => {
    let deck = []
    
    for (let i = 0; i < this.state.suit.length; i++) {
      deck.push(<PlayingCard suit={this.state.suit[i]} value={this.state.value[i]}/>)
    }
    return deck
  }

  render() {
    return (
      <div id='deck'>
        {this.createDeck()};
        <span><button onClick={this.shuffle}>Shuffle</button></span>
      </div>
    );
  }
}

export default Deck;
