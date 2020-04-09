// SYSTEM IMPORTS
import React from "react";

// CUSTOM IMPORTS
import DraggableCard from "./DraggableCard.js";
import {freeModeTemplates} from '../Templates.js';

class SandboxDeck extends React.Component {

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

  /* Get initial positions for card that templates are based off */
  getInitialCardPositions(layout) {

    // Get window width and height in pixels
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // return initial position object
    switch(layout) {


      case 'solitaire':
        return { x: screenWidth / 10, y: screenHeight / 4 };
      case 'pyramid':
        return { x: screenWidth / 2 - 55, y: screenHeight / 8 };
      case 'free-mode':
        return { x: screenWidth / 2 - 55, y: screenHeight / 4 };
      default:
        return { x: screenWidth / 2 - 55, y: screenHeight / 4 };
    }
  }

  /*Return position & side template based on layout chosen*/
  getTemplate(x, y) {
    return freeModeTemplates(x, y);
  }

  /* Return deck as array of <PlayingCard/> components */
  createDeck(){
    // Initialize empty deck array
    let deck = [];

    // Get card positions corresponding to chosen layout
    const layout = this.props.layout;
    var positions = this.getInitialCardPositions(layout);
    const x = positions.x;
    const y = positions.y;

    // Get side & position template based on layout chosen
    const template = this.getTemplate(x, y);

    for (let i=0; i < this.state.suitVals.length; i++) {
      const side = i < template.sides.length ? template.sides[i] : 'back';
      const position = i < template.positions.length ? template.positions[i] : template.defaultLocation;


      deck.push(<DraggableCard ref={'card'+i} key={i} side={side} suit={this.state.suitVals[i][0]} value={this.state.suitVals[i][1]} img={this.state.img} top={position.y} left={position.x} shuffleX={x} shuffleY={y}/>)
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

export default SandboxDeck;
