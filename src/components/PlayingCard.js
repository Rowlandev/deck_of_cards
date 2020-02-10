import React from "react";
import "../css/PlayingCard.css";

class PlayingCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      suite: this.props.suite,
      value: this.props.value
    };
  }

  render() {
    return (
      <div id="playing-card">
        <p id="top-left-suite">{this.state.suite}</p>
        <p id="top-left-value">{this.state.value}</p>
        <p id="bottom-right-suite">{this.state.suite}</p>
        <p id="bottom-right-value">{this.state.value}</p>
      </div>
    );
  }
}

export default PlayingCard;
