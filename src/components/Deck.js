// SYSTEM IMPORTS
import React from "react";

// CUSTOM IMPORTS
import PlayingCard from "./PlayingCard.js";

class Deck extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      card1Suit: "club",
      card1Val: "A",
      card2Suit: "club",
      card2Val: "2",
      card3Suit: "club",
      card3Val: "3",
      card4Suit: "club",
      card4Val: "4",
      card5Suit: "club",
      card5Val: "5",
      card6Suit: "club",
      card6Val: "6",
      card7Suit: "club",
      card7Val: "7",
      card8Suit: "club",
      card8Val: "8",
      card9Suit: "club",
      card9Val: "9",
      card10Suit: "club",
      card10Val: "10",
      card11Suit: "club",
      card11Val: "Jack",
      card12Suit: "club",
      card12Val: "Queen",
      card13Suit: "club",
      card13Val: "King",
      card14Suit: "spade",
      card14Val: "A",
      card15Suit: "spade",
      card15Val: "2",
      card16Suit: "spade",
      card16Val: "3",
      card17Suit: "spade",
      card17Val: "4",
      card18Suit: "spade",
      card18Val: "5",
      card19Suit: "spade",
      card19Val: "6",
      card20Suit: "spade",
      card20Val: "7",
      card21Suit: "spade",
      card21Val: "8",
      card22Suit: "spade",
      card22Val: "9",
      card23Suit: "spade",
      card23Val: "10",
      card24Suit: "spade",
      card24Val: "Jack",
      card25Suit: "spade",
      card25Val: "Queen",
      card26Suit: "spade",
      card26Val: "King",
      card27Suit: "heart",
      card27Val: "A",
      card28Suit: "heart",
      card28Val: "2",
      card29Suit: "heart",
      card29Val: "3",
      card30Suit: "heart",
      card30Val: "4",
      card31Suit: "heart",
      card31Val: "5",
      card32Suit: "heart",
      card32Val: "6",
      card33Suit: "heart",
      card33Val: "7",
      card34Suit: "heart",
      card34Val: "8",
      card35Suit: "heart",
      card35Val: "9",
      card36Suit: "heart",
      card36Val: "10",
      card37Suit: "heart",
      card37Val: "Jack",
      card38Suit: "heart",
      card38Val: "Queen",
      card39Suit: "heart",
      card39Val: "King",
      card40Suit: "diamond",
      card40Val: "A",
      card41Suit: "diamond",
      card41Val: "2",
      card42Suit: "diamond",
      card42Val: "3",
      card43Suit: "diamond",
      card43Val: "4",
      card44Suit: "diamond",
      card44Val: "5",
      card45Suit: "diamond",
      card45Val: "6",
      card46Suit: "diamond",
      card46Val: "7",
      card47Suit: "diamond",
      card47Val: "8",
      card48Suit: "diamond",
      card48Val: "9",
      card49Suit: "diamond",
      card49Val: "10",
      card50Suit: "diamond",
      card50Val: "Jack",
      card51Suit: "diamond",
      card51Val: "Queen",
      card52Suit: "diamond",
      card52Val: "King"
    };
  }

  render() {
    return (
      <div id='deck'>
        <PlayingCard suit={this.state.card1Suit} value={this.state.card1Val}/>
        <PlayingCard suit={this.state.card2Suit} value={this.state.card2Val}/>
        <PlayingCard suit={this.state.card3Suit} value={this.state.card3Val}/>
        <PlayingCard suit={this.state.card4Suit} value={this.state.card4Val}/>
        <PlayingCard suit={this.state.card5Suit} value={this.state.card5Val}/>
        <PlayingCard suit={this.state.card6Suit} value={this.state.card6Val}/>
        <PlayingCard suit={this.state.card7Suit} value={this.state.card7Val}/>
        <PlayingCard suit={this.state.card8Suit} value={this.state.card8Val}/>
        <PlayingCard suit={this.state.card9Suit} value={this.state.card9Val}/>
        <PlayingCard suit={this.state.card10Suit} value={this.state.card10Val}/>
        <PlayingCard suit={this.state.card11Suit} value={this.state.card11Val}/>
        <PlayingCard suit={this.state.card12Suit} value={this.state.card12Val}/>
        <PlayingCard suit={this.state.card13Suit} value={this.state.card13Val}/>
        <PlayingCard suit={this.state.card14Suit} value={this.state.card14Val}/>
        <PlayingCard suit={this.state.card15Suit} value={this.state.card15Val}/>
        <PlayingCard suit={this.state.card16Suit} value={this.state.card16Val}/>
        <PlayingCard suit={this.state.card17Suit} value={this.state.card17Val}/>
        <PlayingCard suit={this.state.card18Suit} value={this.state.card18Val}/>
        <PlayingCard suit={this.state.card19Suit} value={this.state.card19Val}/>
        <PlayingCard suit={this.state.card20Suit} value={this.state.card20Val}/>
        <PlayingCard suit={this.state.card21Suit} value={this.state.card21Val}/>
        <PlayingCard suit={this.state.card22Suit} value={this.state.card22Val}/>
        <PlayingCard suit={this.state.card23Suit} value={this.state.card23Val}/>
        <PlayingCard suit={this.state.card24Suit} value={this.state.card24Val}/>
        <PlayingCard suit={this.state.card25Suit} value={this.state.card25Val}/>
        <PlayingCard suit={this.state.card26Suit} value={this.state.card26Val}/>
        <PlayingCard suit={this.state.card27Suit} value={this.state.card27Val}/>
        <PlayingCard suit={this.state.card28Suit} value={this.state.card28Val}/>
        <PlayingCard suit={this.state.card29Suit} value={this.state.card29Val}/>
        <PlayingCard suit={this.state.card30Suit} value={this.state.card30Val}/>
        <PlayingCard suit={this.state.card31Suit} value={this.state.card31Val}/>
        <PlayingCard suit={this.state.card32Suit} value={this.state.card32Val}/>
        <PlayingCard suit={this.state.card33Suit} value={this.state.card33Val}/>
        <PlayingCard suit={this.state.card34Suit} value={this.state.card34Val}/>
        <PlayingCard suit={this.state.card35Suit} value={this.state.card35Val}/>
        <PlayingCard suit={this.state.card36Suit} value={this.state.card36Val}/>
        <PlayingCard suit={this.state.card37Suit} value={this.state.card37Val}/>
        <PlayingCard suit={this.state.card38Suit} value={this.state.card38Val}/>
        <PlayingCard suit={this.state.card39Suit} value={this.state.card39Val}/>
        <PlayingCard suit={this.state.card40Suit} value={this.state.card40Val}/>
        <PlayingCard suit={this.state.card41Suit} value={this.state.card41Val}/>
        <PlayingCard suit={this.state.card42Suit} value={this.state.card42Val}/>
        <PlayingCard suit={this.state.card43Suit} value={this.state.card43Val}/>
        <PlayingCard suit={this.state.card44Suit} value={this.state.card44Val}/>
        <PlayingCard suit={this.state.card45Suit} value={this.state.card45Val}/>
        <PlayingCard suit={this.state.card46Suit} value={this.state.card46Val}/>
        <PlayingCard suit={this.state.card47Suit} value={this.state.card47Val}/>
        <PlayingCard suit={this.state.card48Suit} value={this.state.card48Val}/>
        <PlayingCard suit={this.state.card49Suit} value={this.state.card49Val}/>
        <PlayingCard suit={this.state.card50Suit} value={this.state.card50Val}/>
        <PlayingCard suit={this.state.card51Suit} value={this.state.card51Val}/>
        <PlayingCard suit={this.state.card52Suit} value={this.state.card52Val}/>
      </div>
    );
  }
}

export default Deck;
