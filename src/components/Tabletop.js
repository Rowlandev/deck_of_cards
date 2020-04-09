// SYSTEM IMPORTS
import React from "react";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

// IMAGE IMPORTS
import Prof1 from "../images/backs/prof1.JPG"
import Prof2 from "../images/backs/prof2.PNG"
import Prof3 from "../images/backs/prof3.JPG"
import Tim from "../images/backs/tim.PNG"
import Flavortown from "../images/backs/flavortown.PNG"
import NickCage from "../images/backs/nick_cage.PNG"
import TheGuy from "../images/backs/the_guy.PNG"
import Squid from "../images/backs/squid.PNG"

// CUSTOM IMPORTS
import GameButtons from "./GameButtons.js";
import SandboxDeck from "./SandboxDeck.js";
import WarDeck from "./WarDeck.js";
import Customize from "./Customize.js"
import "../css/Tabletop.css";

/* Help Message Object to pass as props */
const help = {
  solitaire: {
    header: "Solitaire",
    body: "The first objective is to release and play into position certain cards to build up each foundation, in sequence and in suit, from the ace through the king. The ultimate objective is to build the whole pack onto the foundations, and if that can be done, the Solitaire game is won."
  },
  theIdiot: {
    header: "The Idiot",
    body: "In this game, the goal is to be anything but the last person to play out all the cards from their hand. You play cards by either matching the current number in the discard pile or playing a higher-ranking card. The last person to empty their hand is declared the loser!."
  },
  accordian: {
    header: "Accordian",
    body: "Accordion is a solitaire game using one deck of playing cards. The object is to compress the entire deck into one pile like an accordion!"
  },
  pyramid: {
    header: "Pyramid",
    body: "The objective of Pyramid is to remove pairs of cards that add up to the total of the highest card in the deck from a pyramid arrangement of 28 cards. All cards (cards from the pyramid and cards from the stock) must be moved to the foundation. The pyramid is demolished by the end, if it stands you lose."
  },
  freeMode: {
    header: "Free Mode",
    body: "Welcome to free mode - feel free to move the cards from the deck however you would like :)"
  },
  war: {
    header: "War",
    body: "This is the game of War. The goal is to flip cards and when the value of your card is higher than your opponent, you win."
  }
};

class Tabletop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: "mainMenu",
      showingHelpMessage: false,
      dark: false,
      img: Prof1,
      helpText: help.freeMode,
      layout: 'no layout chosen'
    };
  }

  /* Update Card Layouts */
  loadFreeMode = () => {
    this.setState({
      mode: 'sandbox',
      layout: 'free-mode',
      helpText: help.freeMode
    });
}

loadPyramid = () => {
  this.setState({
      mode: 'sandbox',
      layout: 'pyramid',
      helpText: help.pyramid
    });
  }

  loadAccordian = () => {
    this.setState({
      mode: 'sandbox',
      layout: 'accordian',
      helpText: help.accordian
    });
  }

  loadTheIdiot = () => {
    this.setState({
      mode: 'sandbox',
      layout: 'the-idiot',
      helpText: help.theIdiot
    });
  }

loadSolitaire = () => {
  this.setState({
      mode: 'sandbox',
      layout: 'solitaire',
      helpText: help.solitaire
    });
  }

  enterCustomize = (e) => {
    this.setState({
      mode: "customize"
    })
  }

  enterChoosingLayout = (e) => {
    this.setState({
      mode: "choosingLayout"
    });
  }

  //called from GameButtons to the sandbox deck
  shuffle = (e) => {
    this.refs.sandboxDeck.shuffle();
  }

  //called form Gamebuttons to the war deck
  resetWarDeck = (e) => {
    this.refs.warDeck.reset();
  }

  goToMainMenu = (e) => {
    this.setState({
      mode: "mainMenu"
    })
  }

  changeImg = (img) => {
    this.setState({
      img: img
    })
  }

  goToLayoutMenu = () => {
    this.setState({
      mode: 'layout'
    });
  }

  enterSandboxMode = () => {
    this.setState({
      mode: 'sandbox',
      layout: 'free-mode'
    });
  }

  enterGameMenu = () => {
    this.setState({
      mode: 'choosingGame'
    })
  }

  enterWar = () => {
    this.setState({
      mode: 'war',
      helpText: help.war
    })
  }

  enterAbout = () => {
    this.setState({
      mode: 'about'
    })
  }

  render() {

    return (
      <div id='display'>
      <RemoveScrollBar />

      {/* Main Menu */}
      {this.state.mode === "mainMenu" &&
          <div className='main-menu'>
            <p id="title">deck_of_cards</p>
            <p id="creators">By: Braden Batman, Chase Grainger, and Matthew Heck</p>
            <p><button className="button" onClick={this.enterGameMenu}>Play</button></p>
            <p><button className="button" onClick={this.enterCustomize}>Customize</button></p>
            <p><button className="button" onClick={this.enterAbout}>About</button></p>
          </div>
      }

      {/* Sandbox Mode */}
      {this.state.mode === "sandbox" &&
          <div id="table">
            <GameButtons type="help" mode={"sandbox"} showing={this.state.showingHelpMessage} goToLayoutMenu={this.goToLayoutMenu} shuffle={this.shuffle} goToMainMenu={this.goToMainMenu} helpText={this.state.helpText}/>
            <SandboxDeck ref="sandboxDeck" img={this.state.img} layout={this.state.layout}/>
          </div>
      }

      {/* Choose Your Fighter */}
      {this.state.mode === "customize" &&
          <div id="customize">
            <Customize goToMainMenu={this.goToMainMenu} changeImg={this.changeImg}/>
          </div>
      }

      {/* Choose Game Mode */}
      {this.state.mode === "choosingGame" &&
      <div className="main-menu">
        <p id="title">Choose A Game</p>
        <div>
          <p><button className="button" onClick={this.enterWar}>War</button></p>
          <p><button className="button" onClick={this.enterSandboxMode}>Sandbox Mode</button></p>
        </div>
      </div>
      }

      {/* Choose Layout */}
      {this.state.mode === "layout" &&
      <div className="main-menu">
        <p id="title">Choose A Premade Layout</p>
        <div>
          <p><button className="button" onClick={this.loadSolitaire} text={help.solitaire}>Solitaire</button></p>
          <p><button className="button" onClick={this.loadTheIdiot} text={help.theIdiot}>The Idiot</button></p>
          <p><button className="button" onClick={this.loadAccordian} text={help.accordian}>Accordian</button></p>
          <p><button className="button" onClick={this.loadPyramid} text={help.pyramid}>Pyramid</button></p>
          <p><button className="button" onClick={this.loadFreeMode} text={help.freeMode}>Sandbox Mode</button></p>
        </div>
      </div>
      }

      {/* War Layout */}
      {this.state.mode === "war" &&
      <div id="war-table">
        <GameButtons type="help" mode={"game"} showing={this.state.showingHelpMessage} shuffle={this.resetWarDeck} goToMainMenu={this.goToMainMenu} helpText={this.state.helpText}/>
        <WarDeck ref="warDeck" img={this.state.img}/>
      </div>
      }

      {/* Choose Layout */}
      {this.state.mode === "about" &&
      <div className="main-menu">
      <GameButtons type="help" mode={"menu"} goToMainMenu={this.goToMainMenu}/>
        <p id="title">About</p>
        <div>
          <p id="text">This is a web application developed by Braden Batman, Chase Grainger, and Matthew Heck. You can play premade games, or play around with a deck of cards and premade card layouts in Sandbox mode.</p>
        </div>
      </div>
      }

      </div>
    );
  }
}

export default Tabletop;
