import React from "react";
import ShuffleIcon from "../images/icons/shuffle.png";
import HelpIcon from "../images/icons/help.png";
import ExitIcon from "../images/icons/exit.png";
import "../css/GameButtons.css";

class GameButtons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showing: this.props.showing,
      modalClassName: "modal-hidden"
    };
  }

  toggleHelp = () => {
    var classNameToBe;

    if (this.state.modalClassName === "modal-hidden") {
      classNameToBe = "modal-showing";
    } else {
      classNameToBe = "modal-hidden";
    }

    this.setState({
      showing: !this.state.showing,
      modalClassName: classNameToBe
    });
  }

  handleExit = () => {
    this.props.goToMainMenu()
  }

  handleShuffle = () => {
    this.props.shuffle()
  }

  render() {
    return (
      <div className="button-modal-container">

        {/* Darkened Background*/}
        <div className={this.state.modalClassName}></div>

        <img src={ShuffleIcon} className="icon" alt="shuffle icon" id="shuffle-icon" onClick={this.handleShuffle}/>
        <img src={HelpIcon} className="icon" alt="help icon" id="help-icon" onClick={this.toggleHelp}/>
        <img src={ExitIcon} className="icon" alt="exit icon" id="exit-icon" onClick={this.handleExit}/>

        {/* Header & Body*/}
        {this.state.showing &&
          <div id="header-and-body">

            <div id="header">
              <p id='header-text'>Welcome to our deck of cards simulation!</p>
            </div>

            <div id="body">
              <p id='body-text'>
                Using our deck of cards simulation is very
                simple - all you have to do is drag and drop cards
                and pretend as if they were real :)
              </p>
            </div>

            <div id="close-button" onClick={this.toggleHelp}>
              Close
            </div>

          </div>
        }

        {/* Close Modal Button */}


      </div>
    );
  }
}

export default GameButtons;
