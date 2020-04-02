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

  /* Shuffle cards and revert to original positions */
  shuffle = () => {
    // get & initialize needed objects
    var currentSuitVals = [...this.state.suitVals];
    var newOrder = [];

    // Create new order of cards
    while(currentSuitVals.length !== 0){
      var rand = Math.floor(Math.random() * (currentSuitVals.length));
      newOrder.push(currentSuitVals[rand]);
      currentSuitVals.splice(rand, 1);
    }

    // Set state using new order
    this.setState({
      suitVals: newOrder
    });

    // Set timeout while shuffle occurs
    setTimeout(() =>{
      for(var i=0;i<this.state.suitVals.length;i++){
        this.refs['card'+i].handleShuffle();
      }
    });
  }

  getCardPositions(layout) {

    // Get window width and height in pixels
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;


    switch(layout) {
      case 'solitaire':
        return { x: screenWidth / 10, y: screenHeight / 4 };
        break;
      case 'the-idiot':
        console.log('idiot');
        break;
      case 'accordian':
        console.log('acc');
        break;
      case 'pyramid':
        console.log('pyramid');
        break;
      case 'free-mode':
        return { x: screenWidth / 2 - 75, y: screenHeight / 4 };
    }
  }

  /* Return deck as array of <PlayingCard/> components */
  createDeck(){
    // Initialize empty deck array
    let deck = [];

    // Get card positions corresponding to chosen layout
    const layout = this.props.layout;
    var positions = this.getCardPositions(layout);
    const x = positions.x;
    const y = positions.y;

    // 28 length

    // Create side template for solitaire
    const sideTemplate = [
      'front',
      'back', 'front',
      'back', 'back', 'front',
      'back', 'back', 'back', 'front',
      'back', 'back', 'back', 'back', 'front',
      'back', 'back', 'back', 'back', 'back', 'front',
      'back', 'back', 'back', 'back', 'back', 'back', 'front'
    ];

    const positionTemplate = [
      {x: x, y: y},
      {x: x + 150, y: y}, {x: x + 150, y: y + 50},
      {x: x + 300, y: y}, {x: x + 300, y: y + 50}, {x: x + 300, y: y + 100},
      {x: x + 450, y: y}, {x: x + 450, y: y + 50}, {x: x + 450, y: y + 100}, {x: x + 450, y: y + 150},
      {x: x + 600, y: y}, {x: x + 600, y: y + 50}, {x: x + 600, y: y + 100}, {x: x + 600, y: y + 150}, {x: x + 600, y: y + 200},
      {x: x + 750, y: y}, {x: x + 750, y: y + 50}, {x: x + 750, y: y + 100}, {x: x + 750, y: y + 150}, {x: x + 750, y: y + 200}, {x: x + 750, y: y + 250},
      {x: x + 900, y: y}, {x: x + 900, y: y + 50}, {x: x + 900, y: y + 100}, {x: x + 900, y: y + 150}, {x: x + 900, y: y + 200}, {x: x + 900, y: y + 250}, {x: x + 900, y: y + 300}
    ];

    for (let i=0; i < this.state.suitVals.length; i++) {
      const side = i < sideTemplate.length ? sideTemplate[i] : 'back';
      const position = i < positionTemplate.length ? positionTemplate[i] : {x: x + 900, y: 20};


      deck.push(<PlayingCard ref={'card'+i} key={i} side={side} suit={this.state.suitVals[i][0]} value={this.state.suitVals[i][1]} img={this.state.img} top={position.y} left={position.x}/>)
    }
    return deck;
  }

  render() {
    return (
      <div id='deck'>
        {this.createDeck()}
      </div>
    );
  }
}

export default Deck;
