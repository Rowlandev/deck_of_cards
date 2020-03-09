import React from "react";
import PlayingCard from "./PlayingCard.js";
import HelpButton from "./HelpButton.js";

var deck = {
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
}

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
        <PlayingCard suit={deck.card1Suit} value={deck.card1Val}/>
        <PlayingCard suit={deck.card2Suit} value={deck.card2Val}/>
        <PlayingCard suit={deck.card3Suit} value={deck.card3Val}/>
        <PlayingCard suit={deck.card4Suit} value={deck.card4Val}/>
        <PlayingCard suit={deck.card5Suit} value={deck.card5Val}/>
        <PlayingCard suit={deck.card6Suit} value={deck.card6Val}/>
        <PlayingCard suit={deck.card7Suit} value={deck.card7Val}/>
        <PlayingCard suit={deck.card8Suit} value={deck.card8Val}/>
        <PlayingCard suit={deck.card9Suit} value={deck.card9Val}/>
        <PlayingCard suit={deck.card10Suit} value={deck.card10Val}/>
        <PlayingCard suit={deck.card11Suit} value={deck.card11Val}/>
        <PlayingCard suit={deck.card12Suit} value={deck.card12Val}/>
        <PlayingCard suit={deck.card13Suit} value={deck.card13Val}/>
        <PlayingCard suit={deck.card14Suit} value={deck.card14Val}/>
        <PlayingCard suit={deck.card15Suit} value={deck.card15Val}/>
        <PlayingCard suit={deck.card16Suit} value={deck.card16Val}/>
        <PlayingCard suit={deck.card17Suit} value={deck.card17Val}/>
        <PlayingCard suit={deck.card18Suit} value={deck.card18Val}/>
        <PlayingCard suit={deck.card19Suit} value={deck.card19Val}/>
        <PlayingCard suit={deck.card20Suit} value={deck.card20Val}/>
        <PlayingCard suit={deck.card21Suit} value={deck.card21Val}/>
        <PlayingCard suit={deck.card22Suit} value={deck.card22Val}/>
        <PlayingCard suit={deck.card23Suit} value={deck.card23Val}/>
        <PlayingCard suit={deck.card24Suit} value={deck.card24Val}/>
        <PlayingCard suit={deck.card25Suit} value={deck.card25Val}/>
        <PlayingCard suit={deck.card26Suit} value={deck.card26Val}/>
        <PlayingCard suit={deck.card27Suit} value={deck.card27Val}/>
        <PlayingCard suit={deck.card28Suit} value={deck.card28Val}/>
        <PlayingCard suit={deck.card29Suit} value={deck.card29Val}/>
        <PlayingCard suit={deck.card30Suit} value={deck.card30Val}/>
        <PlayingCard suit={deck.card31Suit} value={deck.card31Val}/>
        <PlayingCard suit={deck.card32Suit} value={deck.card32Val}/>
        <PlayingCard suit={deck.card33Suit} value={deck.card33Val}/>
        <PlayingCard suit={deck.card34Suit} value={deck.card34Val}/>
        <PlayingCard suit={deck.card35Suit} value={deck.card35Val}/>
        <PlayingCard suit={deck.card36Suit} value={deck.card36Val}/>
        <PlayingCard suit={deck.card37Suit} value={deck.card37Val}/>
        <PlayingCard suit={deck.card38Suit} value={deck.card38Val}/>
        <PlayingCard suit={deck.card39Suit} value={deck.card39Val}/>
        <PlayingCard suit={deck.card40Suit} value={deck.card40Val}/>
        <PlayingCard suit={deck.card41Suit} value={deck.card41Val}/>
        <PlayingCard suit={deck.card42Suit} value={deck.card42Val}/>
        <PlayingCard suit={deck.card43Suit} value={deck.card43Val}/>
        <PlayingCard suit={deck.card44Suit} value={deck.card44Val}/>
        <PlayingCard suit={deck.card45Suit} value={deck.card45Val}/>
        <PlayingCard suit={deck.card46Suit} value={deck.card46Val}/>
        <PlayingCard suit={deck.card47Suit} value={deck.card47Val}/>
        <PlayingCard suit={deck.card48Suit} value={deck.card48Val}/>
        <PlayingCard suit={deck.card49Suit} value={deck.card49Val}/>
        <PlayingCard suit={deck.card50Suit} value={deck.card50Val}/>
        <PlayingCard suit={deck.card51Suit} value={deck.card51Val}/>
        <PlayingCard suit={deck.card52Suit} value={deck.card52Val}/>
      </div>
    );
  }
}

export default Tabletop;
