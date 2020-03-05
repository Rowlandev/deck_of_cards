import React from "react";
import "../css/PlayingCard.css";

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

// import GuyFiere from "../images/backs/guy-fieri.jpg"
import Prof from "../images/backs/prof.jpg"

class PlayingCard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      suit: this.props.suit,
      value: this.props.value,
      top: 50,
      left: 50,
      mouseDownX:0,
      mouseDownY:0,
      side: "back",
      clicked: false
    };
  }

  cardClicked = (e) => {
    this.mouseDownX = e.clientX;
    this.mouseDownY = e.clientY;
    this.setState({
      clicked: true
    })
  }

  cardReleased = (e) => {
    var newSide = this.state.side;  //in case it is not changed
    var newTop = this.state.top;
    var newLeft = this.state.left;
    var x = e.clientX;
    var y = e.clientY;


    if (this.state.clicked === true){
      if (x === this.mouseDownX && y === this.mouseDownY) {
        if (this.state.side === "back") {
          newSide = "front";
        } else {
          newSide = "back";
        }
      } else {
        newTop = this.state.top + (y - this.mouseDownY);
        newLeft = this.state.left + (x - this.mouseDownX);
      }
    }

    this.setState({
      suit: this.props.suit,
      value: this.props.value,
      top: newTop,
      left: newLeft,
      side: newSide,
      clicked: false
    });
  }

  render() {

    // define variables for card values
    var topLeftSuit;
    var topLeftValue;
    var bottomRightSuit;
    var bottomRightValue;
    var largeSuit;
    var offset = {top: this.state.top + "px",
                  left: this.state.left + "px"
                }

    // assign card red suit

    if (this.state.suit === "heart") {
      topLeftSuit = <img src={RedHeartCorner} alt="suit of hearts" id="top-left-suit"/>;
      bottomRightSuit = <img src={RedHeartCorner} alt="suit of hearts" id="bottom-right-suit"/>;
      largeSuit = <img src={RedHeartLarge} alt="large heart" id="large-suit"/>
    } else if (this.state.suit === "diamond") {
      topLeftSuit = <img src={RedDiamondCorner} alt="suit of diamonds" id="top-left-suit"/>;
      bottomRightSuit = <img src={RedDiamondCorner} alt="suit of diamonds" id="bottom-right-suit"/>;
      largeSuit = <img src={RedDiamondLarge} alt="large heart" id="large-suit"/>
    } else if (this.state.suit === "spade") {
        topLeftSuit = <img src={BlackSpadeCorner} alt="suit of spades" id="top-left-suit"/>;
        bottomRightSuit = <img src={BlackSpadeCorner} alt="suit of spades" id="bottom-right-suit"/>;
        largeSuit = <img src={BlackSpadeLarge} alt="large heart" id="large-suit"/>
    } else if (this.state.suit === "club") {
      topLeftSuit = <img src={BlackClubCorner} alt="suit of clubs" id="top-left-suit"/>;
      bottomRightSuit = <img src={BlackClubCorner} alt="suit of clubs" id="bottom-right-suit"/>;
      largeSuit = <img src={BlackClubLarge} alt="large heart" id="large-suit"/>
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
      <div>
      {this.state.side === "back" &&
        <div id="back-of-card" style={offset} data-testid="card" onMouseDown={(e) => this.cardClicked(e)} onMouseUp={(e) => this.cardReleased(e)}>
          <img src={Prof} alt="guy fieri" id="back-image"/>
        </div>
      }

      {this.state.side === "front" &&
        <div id="playing-card" style={offset} data-testid="card" onMouseDown={(e) => this.cardClicked(e)} onMouseUp={(e) => this.cardReleased(e)}>
          {topLeftSuit}
          {bottomRightSuit}
          {topLeftValue}
          {bottomRightValue}
          {largeSuit}
        </div>
      }
      </div>
    );
  }
}

export default PlayingCard;
