import React from "react";
import HelpIcon from "../images/icons/passive-help.png";
import "../css/HelpButton.css";

class HelpButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showing: this.props.showing
    };
  }

  showHelp = () => {
    this.setState({
      showing: !this.state.showing
    });
    console.log(this.state.showing);
  }

  render() {
    return (
      <div className="help-icon">
        <img src={HelpIcon} alt="help icon" id="help-icon" onClick={this.showHelp}/>

        {this.state.showing &&
          <div id="help-message">
            Welcome to our deck of cards simulation. It is still being progressed,
            so come back soon to see more functionality!
          </div>
        }

      </div>
    );
  }
}

export default HelpButton;
