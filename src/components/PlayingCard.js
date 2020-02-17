import React from "react";
import "../css/PlayingCard.css";

// import red corner suite icons
import RedClubCorner from "../images/red-corners/club.png";
import RedDiamondCorner from "../images/red-corners/diamond.png";
import RedHeartCorner from "../images/red-corners/heart.png";
import RedSpadeCorner from "../images/red-corners/spade.png";

// import black corner suite icons
import BlackClubCorner from "../images/black-corners/club.png";
import BlackDiamondCorner from "../images/black-corners/diamond.png";
import BlackHeartCorner from "../images/black-corners/heart.png";
import BlackSpadeCorner from "../images/black-corners/spade.png";

// import red large icons
import RedClubLarge from "../images/red-large/club.png";
import RedDiamondLarge from "../images/red-large/diamond.png";
import RedHeartLarge from "../images/red-large/heart.png";
import RedSpadeLarge from "../images/red-large/spade.png";

// import black large icons
import BlackClubLarge from "../images/black-large/club.png";
import BlackDiamondLarge from "../images/black-large/diamond.png";
import BlackHeartLarge from "../images/black-large/heart.png";
import BlackSpadeLarge from "../images/black-large/spade.png";

import GuyFiere from "../images/guy-fieri.jpg"

class PlayingCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      suite: this.props.suite,
      value: this.props.value,
      color: this.props.color,
      side: this.props.side
    };
  }

  render() {

    // define variables for card values
    var topLeftSuite;
    var topLeftValue;
    var bottomRightSuite;
    var bottomRightValue;
    var largeSuite;
    var side;

    // assign card red suite
    if (this.state.color === "red") {

      if (this.state.suite === "heart") {
        topLeftSuite = <img src={RedHeartCorner} alt="suite of hearts" id="top-left-suite"/>;
        bottomRightSuite = <img src={RedHeartCorner} alt="suite of hearts" id="bottom-right-suite"/>;
        largeSuite = <img src={RedHeartLarge} alt="large heart" id="large-suite"/>
      } else if (this.state.suite === "spade") {
          topLeftSuite = <img src={RedSpadeCorner} alt="suite of spades" id="top-left-suite"/>;
          bottomRightSuite = <img src={RedSpadeCorner} alt="suite of spades" id="bottom-right-suite"/>;
          largeSuite = <img src={RedSpadeLarge} alt="large heart" id="large-suite"/>
      } else if (this.state.suite === "diamond") {
        topLeftSuite = <img src={RedDiamondCorner} alt="suite of diamonds" id="top-left-suite"/>;
        bottomRightSuite = <img src={RedDiamondCorner} alt="suite of diamonds" id="bottom-right-suite"/>;
        largeSuite = <img src={RedDiamondLarge} alt="large heart" id="large-suite"/>
      } else if (this.state.suite === "club") {
        topLeftSuite = <img src={RedClubCorner} alt="suite of clubs" id="top-left-suite"/>;
        bottomRightSuite = <img src={RedClubCorner} alt="suite of clubs" id="bottom-right-suite"/>;
        largeSuite = <img src={RedClubLarge} alt="large heart" id="large-suite"/>
      }

    // assign card black suite
    } else {

      if (this.state.suite === "heart") {
        topLeftSuite = <img src={BlackHeartCorner} alt="suite of hearts" id="top-left-suite"/>;
        bottomRightSuite = <img src={BlackHeartCorner} alt="suite of hearts" id="bottom-right-suite"/>;
        largeSuite = <img src={BlackHeartLarge} alt="large heart" id="large-suite"/>
      } else if (this.state.suite === "spade") {
          topLeftSuite = <img src={BlackSpadeCorner} alt="suite of spades" id="top-left-suite"/>;
          bottomRightSuite = <img src={BlackSpadeCorner} alt="suite of spades" id="bottom-right-suite"/>;
          largeSuite = <img src={BlackSpadeLarge} alt="large heart" id="large-suite"/>
      } else if (this.state.suite === "diamond") {
        topLeftSuite = <img src={BlackDiamondCorner} alt="suite of diamonds" id="top-left-suite"/>;
        bottomRightSuite = <img src={BlackDiamondCorner} alt="suite of diamonds" id="bottom-right-suite"/>;
        largeSuite = <img src={BlackDiamondLarge} alt="large heart" id="large-suite"/>
      } else if (this.state.suite === "club") {
        topLeftSuite = <img src={BlackClubCorner} alt="suite of clubs" id="top-left-suite"/>;
        bottomRightSuite = <img src={BlackClubCorner} alt="suite of clubs" id="bottom-right-suite"/>;
        largeSuite = <img src={BlackClubLarge} alt="large heart" id="large-suite"/>
      }

    }

    // assign card value based on props
    switch (this.state.value) {
      case "A":
        topLeftValue = <p className={this.state.color} id="top-left-value">A</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">A</p>;
        break;
      case "2":
        topLeftValue = <p className={this.state.color} id="top-left-value">2</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">2</p>;
        break;
      case "3":
        topLeftValue = <p className={this.state.color} id="top-left-value">3</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">3</p>;
        break;
      case "4":
        topLeftValue = <p className={this.state.color} id="top-left-value">4</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">4</p>;
        break;
      case "5":
        topLeftValue = <p className={this.state.color} id="top-left-value">5</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">5</p>;
        break;
      case "6":
        topLeftValue = <p className={this.state.color} id="top-left-value">6</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">6</p>;
        break;
      case "7":
        topLeftValue = <p className={this.state.color} id="top-left-value">7</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">7</p>;
        break;
      case "8":
        topLeftValue = <p className={this.state.color} id="top-left-value">8</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">8</p>;
        break;
      case "9":
        topLeftValue = <p className={this.state.color} id="top-left-value">9</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">9</p>;
        break;
      case "10":
        topLeftValue = <p className={this.state.color} id="top-left-value">10</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">10</p>;
        break;
      case "Jack":
        topLeftValue = <p className={this.state.color} id="top-left-value">J</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">J</p>;
        break;
      case "Queen":
        topLeftValue = <p className={this.state.color} id="top-left-value">Q</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">Q</p>;
        break;
      case "King":
        topLeftValue = <p className={this.state.color} id="top-left-value">K</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">K</p>;
        break;
      case "Joker":
        topLeftValue = <p className={this.state.color} id="top-left-value">JOKER</p>;
        bottomRightValue = <p className={this.state.color} id="bottom-right-value">JOKER</p>;
        break;
      default:
        break;
    }

    if (this.state.side === "back") {
      side = <img src={GuyFiere} alt="guy fieri" id="back-image"/>
      topLeftSuite = <p></p>
      bottomRightSuite = <p></p>
      topLeftValue = <p></p>
      bottomRightValue = <p></p>
      largeSuite = <p></p>
    }

    return (
      <div id="playing-card" data-testid="card">
        {topLeftSuite}
        {bottomRightSuite}
        {topLeftValue}
        {bottomRightValue}
        {largeSuite}
      </div>
    );
  }
}

export default PlayingCard;
