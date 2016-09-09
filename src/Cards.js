import React from 'react';
import './Cards.css';

const Cards = React.createClass({
  displayName: 'Cards',

  propTypes: {
    id: React.PropTypes.number,
    image: React.PropTypes.object,
    isFlipped: React.PropTypes.bool,
    flipCard: React.PropTypes.func,
  },

  render() {
    let image= null

    if (this.props.isFlipped) {
      image = (
        <img className="Card-image" src={this.props.image.src} alt="hej"/>
      )
    }

    return (
      <div onClick={this.props.flipCard.bind(null, this.props.id)} className="Cards">
        {image}
      </div>
    );
  },
})

export default Cards;
