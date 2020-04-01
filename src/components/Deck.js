// SYSTEM IMPORTS
import React from "react";

// CUSTOM IMPORTS
import PlayingCard from "./PlayingCard.js";

class Deck extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      suitVals: [
        ["club","A"],["club","2"],["club","3"],["club","4"],["club","5"],["club","6"],["club","7"],["club","8"],["club","9"],["club","10"],["club","Jack"],["club","Queen"],["club","King"],
        ["diamond","A"],["diamond","2"],["diamond","3"],["diamond","4"],["diamond","5"],["diamond","6"],["diamond","7"],["diamond","8"],["diamond","9"],["diamond","10"],["diamond","Jack"],["diamond","Queen"],["diamond","King"],
        ["spade","A"],["spade","2"],["spade","3"],["spade","4"],["spade","5"],["spade","6"],["spade","7"],["spade","8"],["spade","9"],["spade","10"],["spade","Jack"],["spade","Queen"],["spade","King"],
        ["heart","A"],["heart","2"],["heart","3"],["heart","4"],["heart","5"],["heart","6"],["heart","7"],["heart","8"],["heart","9"],["heart","10"],["heart","Jack"],["heart","Queen"],["heart","King"]
      ],
      img: this.props.img
    }
  }

  shuffle = () => {
    var currentSuitVals = [...this.state.suitVals];
    var newOrder = [];

    while(currentSuitVals.length !== 0){
      var rand = Math.floor(Math.random() * (currentSuitVals.length));
      newOrder.push(currentSuitVals[rand]);
      currentSuitVals.splice(rand, 1);
    }

    this.setState({
      suitVals: newOrder
    });

    setTimeout(() =>{
      for(var i=0;i<this.state.suitVals.length;i++){
        this.refs['card'+i].handleShuffle();
        //console.log('Shuffle trigger');
      }
    });
  }

  createDeck(){
  let deck = []
    for (let i=0; i < this.state.suitVals.length; i++) {
      deck.push(<PlayingCard ref={'card'+i} key={i} suit={this.state.suitVals[i][0]} value={this.state.suitVals[i][1]} img={this.state.img}/>)
      //console.log('Deck recreate trigger');
    }
    return deck;
  }

  render() {
    return (
      <div id='deck'>
        {console.log(this)}
        {this.createDeck()}
      </div>
    );
  }
}

export default Deck;
