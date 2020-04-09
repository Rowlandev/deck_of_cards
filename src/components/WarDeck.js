// SYSTEM IMPORTS
import React from "react";

// CUSTOM IMPORTS
import GameCard from "./GameCard.js";
import "../css/WarDeck.css";

class WarDeck extends React.Component {

  constructor(props) {
    super(props)
    var allCards = [
      ["club","A"],["club","2"],["club","3"],["club","4"],["club","5"],["club","6"],["club","7"],["club","8"],["club","9"],["club","10"],["club","Jack"],["club","Queen"],["club","King"],
      ["diamond","A"],["diamond","2"],["diamond","3"],["diamond","4"],["diamond","5"],["diamond","6"],["diamond","7"],["diamond","8"],["diamond","9"],["diamond","10"],["diamond","Jack"],["diamond","Queen"],["diamond","King"],
      ["spade","A"],["spade","2"],["spade","3"],["spade","4"],["spade","5"],["spade","6"],["spade","7"],["spade","8"],["spade","9"],["spade","10"],["spade","Jack"],["spade","Queen"],["spade","King"],
      ["heart","A"],["heart","2"],["heart","3"],["heart","4"],["heart","5"],["heart","6"],["heart","7"],["heart","8"],["heart","9"],["heart","10"],["heart","Jack"],["heart","Queen"],["heart","King"]
    ];
    var deck1 = [];
    var deck2 = [];

    while(allCards.length > 26){
      var rand = Math.floor(Math.random() * (allCards.length));
      deck1.push(allCards[rand]);
      allCards.splice(rand, 1);
    }
    console.log(allCards);

    while(allCards.length !== 0){
      rand = Math.floor(Math.random() * (allCards.length));
      deck2.push(allCards[rand]);
      allCards.splice(rand, 1);
    }

    this.state = {
      deck1: deck1,
      deck2: deck2,
      img: this.props.img,
      tieDeck: [],
      winMessage: 'Press "Flip" to start the game'
    }
  }

  reset = (pCard, oCard) => {
    // Set timeout while reset occurs
    setTimeout(() =>{
        this.refs['playerWarzoneCard'].reset(pCard.suit, pCard.val);
        this.refs['opponentWarzoneCard'].reset(oCard.suit, oCard.val);
    });
  }

  handleFlip = () => {
    var winMessage = "";

    if (this.state.deck1.length === 1){
      winMessage="You lose! Press the Exit button to return to the main menu."
      this.setState({
        winMessage: winMessage
      });
    } else if (this.state.deck2.length === 1) {
      winMessage="You win the game! Press the Exit button to return to the main menu."
      this.setState({
        winMessage: winMessage
      });
    } else {
      var tempDeck1 = [...this.state.deck1];
      var tempDeck2 = [...this.state.deck2];
      var playerCard = {suit: this.state.deck1[this.state.deck1.length-1][0], val: this.state.deck1[this.state.deck1.length-1][1]};
      var opponentCard = {suit: this.state.deck2[this.state.deck2.length-1][0], val: this.state.deck2[this.state.deck2.length-1][1]};

      if (this.state.deck1[this.state.deck1.length-1][1] > this.state.deck2[this.state.deck2.length-1][1]){
        //player win condition
        if(this.state.tieDeck.length > 0){
          winMessage = "You win this round and broke the tie. Press flip to continue";
        }
        else{
          winMessage = "You win this round. Press flip to continue";
        }


        while(this.state.tieDeck.length > 0){
          tempDeck1.unshift([this.state.tieDeck[this.state.tieDeck.length-1][0], this.state.tieDeck[this.state.tieDeck.length-1][1]])
          var tempTieDeck = this.state.tieDeck;
          tempTieDeck.pop();
          this.setState({
            tieDeck: tempTieDeck
          });
        }

        tempDeck1.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]])
        tempDeck1.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]])
        tempDeck1.pop();
        tempDeck2.pop();

      } else if (this.state.deck1[this.state.deck1.length-1][1] < this.state.deck2[this.state.deck2.length-1][1]){
        //opponent win condition

        if(this.state.tieDeck.length > 0){
          winMessage = "CPU wins this round and broke the tie. Press flip to continue";
        }
        else{
          winMessage = "CPU wins this round. Press flip to continue";
        }


        while(this.state.tieDeck.length > 0){
          tempDeck2.unshift([this.state.tieDeck[this.state.tieDeck.length-1][0], this.state.tieDeck[this.state.tieDeck.length-1][1]])
          tempTieDeck = this.state.tieDeck;
          tempTieDeck.pop();
          this.setState({
            tieDeck: tempTieDeck
          });
        }

        tempDeck2.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]])
        tempDeck2.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]])
        tempDeck1.pop();
        tempDeck2.pop();

      }  else {
        //tie condition
        winMessage = "There is a tie. Press flip continue"

        tempTieDeck = this.state.tieDeck;
        tempTieDeck.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]]);
        tempTieDeck.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]]);

        this.setState({
          tieDeck: tempTieDeck
        });

        tempDeck1.pop();
        tempDeck2.pop();
      }


      console.log(tempDeck1);
      console.log(tempDeck2);
      console.log(winMessage);

      this.setState({
        deck1: tempDeck1,
        deck2: tempDeck2,
        winMessage: winMessage
      });

      this.reset(playerCard, opponentCard);
    }
  }

  render() {
    return (
      <div id='game-container'>
      <div id='player-side'>
        <div id='player-deck-holder'>
          <div id='player-deck'>
            <GameCard className='card' ref='card1' key='1' suit={this.state.deck1[0][0]} value={this.state.deck1[0][1]} img={this.state.img} side='back'/>
          </div>
        </div>
        <p><button className="war-button" onClick={this.handleFlip}>Flip</button></p>
        <div className="card-counter" id='player-card-counter'>Total Cards: {this.state.deck1.length}</div>
      </div>
      <div id='warzone'>
        <p id='war-title'>WAR</p>
        <p id='winner'>{this.state.winMessage}</p> <div id="cardzone">
        <div id='player-warzone'>
          <div id='player-war-card'>
            <GameCard className='card' ref='playerWarzoneCard' key='3' suit={this.state.deck1[this.state.deck1.length-1][0]} value={this.state.deck1[this.state.deck1.length-1][1]} img={this.state.img}/>
          </div>
        </div>
        <div id='opponent-warzone'>
          <div id='opponent-war-card'>
            <GameCard className='card' ref='opponentWarzoneCard' key='4' suit={this.state.deck2[this.state.deck2.length-1][0]} value={this.state.deck2[this.state.deck2.length-1][1]} img={this.state.img}/>
          </div>
        </div> </div>
      </div>
        <div id='opponent-side'>
          <div id='opponent-deck-holder'>
            <div id='opponent-deck'>
              <GameCard className='card' ref='card2' key='2' suit={this.state.deck2[0][0]} value={this.state.deck2[0][1]} img={this.state.img} side='back'/>
            </div>
          </div>
          <div className="card-counter" id='opponent-card-counter'>Total Cards: {this.state.deck2.length}</div>
        </div>
      </div>
    );
  }
}

export default WarDeck;
