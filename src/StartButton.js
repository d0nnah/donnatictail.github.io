import React from 'react';

import './StartButton.css';

const StartButton = React.createClass({
  displayName: 'StartButton',

  propTypes: {
    handleStartNewGame: React.PropTypes.func,
  },

  render() {
    return (
      <div className="StartButton" onClick={this.props.handleStartNewGame}>
      Start new game!
      </div>
    );
  }
})

export default StartButton;
