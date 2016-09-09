import React from 'react';

import './Footer.css';
import StartButton from './StartButton.js'

const Footer = React.createClass({
  displayName: 'Footer',

  propTypes: {
    handleStartNewGame: React.PropTypes.func,
    changeNumberOfCards: React.PropTypes.func,
    numberOfCards: React.PropTypes.number,
              },

  render() {
    return (
      <div className="Footer">
          <StartButton handleStartNewGame={this.props.handleStartNewGame}/>

          <br /><input type="radio" name="number of cards" value="4"
          checked={this.props.numberOfCards === 4 || this.props.numberOfCards === 0}
          onChange={this.props.changeNumberOfCards} /> 4 

          <br /><input type="radio" name="number of cards" value="6"
          checked={this.props.numberOfCards === 6}
          onChange={this.props.changeNumberOfCards} /> 6

          <br /><input type="radio" name="number of cards" value="8"
          checked={this.props.numberOfCards === 8}
          onChange={this.props.changeNumberOfCards} /> 8

      </div>
    );
  }
})

export default Footer;
