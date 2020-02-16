import React from "react";
import HelpIcon from "../images/icons/passive-help.png";
import "../css/HelpButton.css";

class HelpButton extends React.Component {
  render() {
    return (
      <div className="help-icon">
        <img src={HelpIcon} alt="help icon" id="help-icon" onmouseover="this.src='passive-help.png'" onmouseout="this.src='active.png'"/>
      </div>
    );
  }
}

export default HelpButton;
