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

    var i = 0;

    while(allCards.length > 26){
      var rand = Math.floor(Math.random() * (allCards.length));
      deck1.push(allCards[rand]);
      allCards.splice(rand, 1);
      i++;
    }
    console.log(allCards);

    while(allCards.length !== 0){
      var rand = Math.floor(Math.random() * (allCards.length));
      deck2.push(allCards[rand]);
      allCards.splice(rand, 1);
      i++;
    }

    this.state = {
      deck1: deck1,
      deck2: deck2,
      img: this.props.img,
      winMessage: 'Press "Flip" to start the game'
    }
  }

  reset = () => {
    // Set timeout while reset occurs
    setTimeout(() =>{
        this.refs['playerWarzoneCard'].reset();
        this.refs['opponentWarzoneCard'].reset();
    });
  }

  handleFlip = () => {

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
      var winMessage = "";
      if (this.state.deck1[this.state.deck1.length-1][1] > this.state.deck2[this.state.deck2.length-1][1]){
        //I made it so that both top cards are put at the bottom of the winner's deck
        tempDeck1.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]])
        tempDeck1.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]])
        tempDeck1.pop();
        tempDeck2.pop();
        winMessage = "You win this round. Press flip to continue";
      } else if (this.state.deck1[this.state.deck1.length-1][1] < this.state.deck2[this.state.deck2.length-1][1]){
        tempDeck2.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]])
        tempDeck2.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]])
        tempDeck1.pop();
        tempDeck2.pop();
        winMessage = "CPU wins this round. Press flip to continue";
      } else {
          if (this.state.deck1[this.state.deck1.length-2][1] > this.state.deck2[this.state.deck2.length-2][1]){
            //I did not update this
            tempDeck1.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]])
            tempDeck2.pop();
            tempDeck1.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]])
            tempDeck2.pop();
            winMessage = "There was a tie so 2 cards were wagered. You win both cards. Press flip to continue";
          } else if (this.state.deck1[this.state.deck1.length-2][1] < this.state.deck2[this.state.deck2.length-2][1]){
            tempDeck2.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]])
            tempDeck1.pop();
            tempDeck2.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]])
            tempDeck1.pop();
            winMessage = "There was a tie so 2 cards were wagered. CPU win both cards. Press flip to continue";
          } else {
            if (this.state.deck1[this.state.deck1.length-3][1] > this.state.deck2[this.state.deck2.length-3][1]){
              tempDeck1.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]])
              tempDeck2.pop();
              tempDeck1.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]])
              tempDeck2.pop();
              tempDeck1.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]])
              tempDeck2.pop();
              winMessage = "There were 2 ties so 3 cards were wagered. You win each card. Press flip to continue";
            } else if (this.state.deck1[this.state.deck1.length-3][1] < this.state.deck2[this.state.deck2.length-3][1]){
              tempDeck2.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]])
              tempDeck1.pop();
              tempDeck2.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]])
              tempDeck1.pop();
              tempDeck2.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]])
              tempDeck1.pop();
              winMessage = "There were 2 ties so 3 cards were wagered. CPU win each card. Press flip to continue";
            } else {
              winMessage = "You triggered an extremely unlikely event that broke the game. Whoops"
            }
          }
      }
      console.log(tempDeck1);
      console.log(tempDeck2);
      console.log(winMessage);

      this.setState({
        deck1: tempDeck1,
        deck2: tempDeck2,
        winMessage: winMessage
      });

      this.reset();

    }
  }

  determineWinner = () => {
    var tempDeck1 = [...this.state.deck1];
    var tempDeck2 = [...this.state.deck2];
    var winMessage = "";
    if (this.state.deck1[this.state.deck1.length-1][1] > this.state.deck2[this.state.deck2.length-1][1]){
      tempDeck1.unshift([this.state.deck2[this.state.deck2.length-1][0], this.state.deck2[this.state.deck2.length-1][1]])
      tempDeck2.pop();
      winMessage = "You win this round. Press flip to continue";
    } else if (this.state.deck1[this.state.deck1.length-1][1] < this.state.deck2[this.state.deck2.length-1][1]){
      tempDeck2.unshift([this.state.deck1[this.state.deck1.length-1][0], this.state.deck1[this.state.deck1.length-1][1]])
      tempDeck1.pop();
      winMessage = "CPU wins this round. Press flip to continue";
    } else {
      winMessage = "tie"
    }

    this.setState({
      deck1: tempDeck1,
      deck2: tempDeck2
    });

    console.log(tempDeck1.length);
    console.log(tempDeck2.length);

    return winMessage
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
        <p id='winner'>{this.state.winMessage}</p>
        <div id='player-warzone'>
          <div id='player-war-card'>
            <GameCard className='card' ref='playerWarzoneCard' key='3' suit={this.state.deck1[this.state.deck1.length-1][0]} value={this.state.deck1[this.state.deck1.length-1][1]} img={this.state.img}/>
          </div>
        </div>
        <div id='opponent-warzone'>
          <div id='opponent-war-card'>
            <GameCard className='card' ref='opponentWarzoneCard' key='4' suit={this.state.deck2[this.state.deck2.length-1][0]} value={this.state.deck2[this.state.deck2.length-1][1]} img={this.state.img}/>
          </div>
        </div>
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
