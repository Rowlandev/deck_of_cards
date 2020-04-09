import React from "react";
import "../css/PlayingCard.css";
<<<<<<< HEAD:src/components/DraggableCard.js
=======
import Draggable from 'react-draggable';
>>>>>>> 5a96e188053fe4e99debe927bf2fb42cffc7c1d0:src/components/PlayingCard.js

// import red corner suit icons
import RedDiamondCorner from "../images/red-corners/diamond.png";
import RedHeartCorner from "../images/red-corners/heart.png";

// import black corner suit icons
import BlackClubCorner from "../images/black-corners/club.png";
import BlackSpadeCorner from "../images/black-corners/spade.png";

// import red large icons
import RedDiamondLarge from "../images/red-large/diamond.png";
import RedHeartLarge from "../images/red-large/heart.png";

// import black large icons
import BlackClubLarge from "../images/black-large/club.png";
import BlackSpadeLarge from "../images/black-large/spade.png";


class DraggableCard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      suit: this.props.suit,
      value: this.props.value,
      img: this.props.img,
<<<<<<< HEAD:src/components/DraggableCard.js
      top: 50,
      left: 50,
      mouseDownX:0,
      mouseDownY:0,
      side: "back",
    };
  }

=======
      top: this.props.top,
      left: this.props.left,
      shuffleX: this.props.shuffleX,
      shuffleY: this.props.shuffleY,
      side: this.props.side,
      deltaX: null,
      deltaY: null,
      flipable: true
    };
  }

  onClick = (e) => {
    if(this.state.flipable)
      {this.flipCard(e)}
    else
      {this.setState({flipable: true})}
  }

  onStart = (e) => {
    this.setState({
      deltaX: e.clientX - this.state.left,
      deltaY: e.clientY - this.state.top
    })
  }

  onStop = (e) => {
    this.setState({
      top: e.clientY - this.state.deltaY,
      left: e.clientX - this.state.deltaX,
    })
  }

  onDrag = (e) => {
    this.setState({
      flipable:false
    })
  }

>>>>>>> 5a96e188053fe4e99debe927bf2fb42cffc7c1d0:src/components/PlayingCard.js
  flipCard = () => {
    var newSide = null;
    if (this.state.side === "back"){
      newSide = "front"
    } else {
      newSide = "back"
    }

    this.setState({
      side: newSide
    })
  }

  handleShuffle() {
    this.setState({
      suit: this.props.suit,
      value: this.props.value,
      top: this.props.shuffleY,
      left: this.props.shuffleX,
      side: "back",
    })
  }

  dragStart = (e) => {
    this.setState({
      mouseDownX: e.clientX,
      mouseDownY: e.clientY
    })
  }

  drop = (e) => {
    var newTop = this.state.top;
    var newLeft = this.state.left;
    var x = e.clientX;
    var y = e.clientY;

    newTop = this.state.top + (y - this.state.mouseDownY);
    newLeft = this.state.left + (x - this.state.mouseDownX);

    this.setState({
      suit: this.props.suit,
      value: this.props.value,
      top: newTop,
      left: newLeft
    });
  }

  render() {

    // define variables for card values
    var topLeftSuit;
    var topLeftValue;
    var bottomRightSuit;
    var bottomRightValue;
    var largeSuit;

    // assign card red suit
    if (this.state.suit === "heart") {
      topLeftSuit = <img src={RedHeartCorner} alt="suit of hearts" id="top-left-suit" draggable={false}/>;
      bottomRightSuit = <img src={RedHeartCorner} alt="suit of hearts" id="bottom-right-suit" draggable={false}/>;
      largeSuit = <img src={RedHeartLarge} alt="large heart" id="large-suit" draggable={false}/>
    } else if (this.state.suit === "diamond") {
      topLeftSuit = <img src={RedDiamondCorner} alt="suit of diamonds" id="top-left-suit" draggable={false}/>;
      bottomRightSuit = <img src={RedDiamondCorner} alt="suit of diamonds" id="bottom-right-suit" draggable={false}/>;
      largeSuit = <img src={RedDiamondLarge} alt="large heart" id="large-suit" draggable={false}/>
    } else if (this.state.suit === "spade") {
        topLeftSuit = <img src={BlackSpadeCorner} alt="suit of spades" id="top-left-suit" draggable={false}/>;
        bottomRightSuit = <img src={BlackSpadeCorner} alt="suit of spades" id="bottom-right-suit" draggable={false}/>;
        largeSuit = <img src={BlackSpadeLarge} alt="large heart" id="large-suit" draggable={false}/>
    } else {
      topLeftSuit = <img src={BlackClubCorner} alt="suit of clubs" id="top-left-suit" draggable={false}/>;
      bottomRightSuit = <img src={BlackClubCorner} alt="suit of clubs" id="bottom-right-suit" draggable={false}/>;
      largeSuit = <img src={BlackClubLarge} alt="large heart" id="large-suit" draggable={false}/>
    }

    // assign card value based on props
    switch (this.state.value) {
      case "A":
        topLeftValue = <p className={this.state.suit} id="top-left-value">A</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">A</p>;
        break;
      case "2":
        topLeftValue = <p className={this.state.suit} id="top-left-value">2</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">2</p>;
        break;
      case "3":
        topLeftValue = <p className={this.state.suit} id="top-left-value">3</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">3</p>;
        break;
      case "4":
        topLeftValue = <p className={this.state.suit} id="top-left-value">4</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">4</p>;
        break;
      case "5":
        topLeftValue = <p className={this.state.suit} id="top-left-value">5</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">5</p>;
        break;
      case "6":
        topLeftValue = <p className={this.state.suit} id="top-left-value">6</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">6</p>;
        break;
      case "7":
        topLeftValue = <p className={this.state.suit} id="top-left-value">7</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">7</p>;
        break;
      case "8":
        topLeftValue = <p className={this.state.suit} id="top-left-value">8</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">8</p>;
        break;
      case "9":
        topLeftValue = <p className={this.state.suit} id="top-left-value">9</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">9</p>;
        break;
      case "10":
        topLeftValue = <p className={this.state.suit} id="top-left-value">10</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">10</p>;
        break;
      case "Jack":
        topLeftValue = <p className={this.state.suit} id="top-left-value">J</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">J</p>;
        break;
      case "Queen":
        topLeftValue = <p className={this.state.suit} id="top-left-value">Q</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">Q</p>;
        break;
      case "King":
        topLeftValue = <p className={this.state.suit} id="top-left-value">K</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">K</p>;
        break;
      case "Joker":
        topLeftValue = <p className={this.state.suit} id="top-left-value">JOKER</p>;
        bottomRightValue = <p className={this.state.suit} id="bottom-right-value">JOKER</p>;
        break;
      default:
        break;
    }

    return (
<<<<<<< HEAD:src/components/DraggableCard.js
      <div id="card" draggable data-testid="card" onClick={(e) => this.flipCard()} onDragStart={(e) => this.dragStart(e)} onDragEnd={(e) => this.drop(e)}>
=======
      //<div id="card" style={{zIndex:"auto"}} onMouseUp={(e) => this.onMouseUp(e)} onMouseDown={(e) => this.onMouseDown(e)} onMouseMove={(e) => this.onMouseMove(e)}>
      <Draggable
        position={{x: this.state.left, y: this.state.top - 500}}
        onStart={this.handleStart, this.onStart}
        onDrag={this.handleDrag, this.onDrag}
        onStop={this.handleStop, this.onStop}>

      <div id="card" onClick={(e) => this.onClick(e)}>
>>>>>>> 5a96e188053fe4e99debe927bf2fb42cffc7c1d0:src/components/PlayingCard.js
      {this.state.side === "back" &&
        <div id="back-of-card">
          <img src={this.props.img} alt="prof cardback" id="back-image" draggable={false}/>
        </div>
      }
      {this.state.side === "front" &&
        <div id="playing-card">
          {topLeftSuit}
          {bottomRightSuit}
          {topLeftValue}
          {bottomRightValue}
          {largeSuit}
        </div>
      }
      </div>
      </Draggable>

    );
  }
}

export default DraggableCard;
