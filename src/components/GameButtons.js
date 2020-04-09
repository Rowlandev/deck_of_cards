import React from "react";
import ShuffleIcon from "../images/icons/shuffle.png";
import LayoutIcon from "../images/icons/layout.png";
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

  goToLayoutMenu = () => {
    this.props.goToLayoutMenu()
  }

  render() {
    return (
      <div className="button-modal-container">

        {/* Darkened Background*/}
        <div className={this.state.modalClassName}></div>

        <img src={ShuffleIcon} style={{zIndex:2999}} className="icon" alt="shuffle icon" id="shuffle-icon" onClick={this.handleShuffle}/>
        <img src={LayoutIcon} style={{zIndex:2999}} className="icon" alt="layout icon" id="layout-icon" onClick={this.goToLayoutMenu}/>
        <img src={HelpIcon} style={{zIndex:2999}} className="icon" alt="help icon" id="help-icon" onClick={this.toggleHelp}/>
        <img src={ExitIcon} style={{zIndex:2999}} className="icon" alt="exit icon" id="exit-icon" onClick={this.handleExit}/>

        {/* Header & Body*/}
        {this.state.showing &&
          <div id="header-and-body">

            <div id="header">
              <p id='header-text'>{this.props.helpText.header}</p>
            </div>

            <div id="body">
              <p id='body-text'>{this.props.helpText.body}</p>
            </div>

            <div id="close-button-container">
                <div id="close-button" onClick={this.toggleHelp}>
                  <p id="close-button-text">Close</p>
                </div>
            </div>

          </div>
        }

        {/* Close Modal Button */}


      </div>
    );
  }
}

export default GameButtons;
