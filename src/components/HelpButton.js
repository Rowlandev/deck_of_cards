import React from "react";
import HelpIcon from "../images/icons/passive-help.png";
import "../css/HelpButton.css";

class HelpButton extends React.Component {

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

  render() {
    return (
      <div className="help-modal-container">

        {/* Darkened Background*/}
        <div className={this.state.modalClassName}></div>

        {/* Help Icon */}
        <img src={HelpIcon} alt="help icon" id="help-icon" onClick={this.toggleHelp}/>

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

export default HelpButton;
