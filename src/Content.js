import _ from 'lodash';
import React from 'react';
import Cards from './Cards.js'
import './Content.css';

const Content = React.createClass({
  displayName: 'Content',

  propTypes: {
    cards: React.PropTypes.object,
    numberOfCards: React.PropTypes.number,
    flipCard:React.PropTypes.func,
              },
renderCards(newCards) {
  //let html = ['<div className="Content-row">']
  const self = this
  let htmlcards = _.map(newCards, createCards)
  function createCards(card) {
    return(
          <Cards
            key={card.id}
            id={card.id}
            image={card.image}
            isFlipped={card.isFlipped}
            flipCard={self.props.flipCard}
            />
        )
  }

  return (
    <div className="Content-row" key={newCards[0].id}>
      {htmlcards}
    </div>
  )

  // html = (_.concat(htmlcards, htmlcards))
  // html.push('</div>')
  //
  // return html
},

handleRenderCards() {
  let cards = _.clone(this.props.cards);
  let newCards = _.map(cards, function(card){return card});
  let htmlNewCards = []
    console.log(cards[1] === this.props.cards[1]);

while (newCards.length !== 0) {

  let divideNewCards = _.slice(newCards, [0], [2])

  console.log('newCards', newCards)

  htmlNewCards.push(this.renderCards(divideNewCards))

  _.pullAt(newCards, [0, 1]);

  /* for (let newCard of newCards) {
    delete cards[newCard.id]; */


}
  return (htmlNewCards)
},
  render() {
    return (
      <div className="Content">

        {this.handleRenderCards()}

      </div>
    );
  }
})

export default Content;
