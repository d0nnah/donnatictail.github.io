import _ from 'lodash';
import React from 'react';

import './App.css';
import Content from './Content.js'
import Footer from './Footer.js'
import Header from './Header.js'

import image1 from './apa.png'
import image2 from './ubuntu.jpg'
import image3 from './onething.png'
import image4 from './catunicorn2.png'

const App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      numberOfCards: 0,
      cards: {},
      images: [],
      flipped: [],
    }
  },

handleStartNewGame() {

  let images = [
        { id: 1,
          src: image1,
        },
        { id: 2,
          src: image2,
        },
        { id: 3,
          src: image3,
        },
        { id: 4,
          src: image4,
        },
      ]

/*if (this.state.numberOfCards === 0) const numberOfCards = 4 else this.state.numberOfCards })

pre default läget ska vara 4, och pre default är === 0. så om numberOfCards === 0
så sätt numberOfCards = 4. Det som tidigare var const numberOfCards = 4.
Annars så vill vi att den uppdaterar statet (tillståndet av appen). */

 let numberOfCards;
    if (this.state.numberOfCards === 0) {
      numberOfCards = 4
    }
    else {
      numberOfCards = this.state.numberOfCards
    }

let matchingcard = _.sampleSize(images, numberOfCards/2);
images = _.shuffle(_.concat(matchingcard, matchingcard))
let cards = {}

for(let i = 0; i < numberOfCards ; i++) {
cards[i] = {
  id: i,
  image: images[i],
  isFlipped: false,
      }
}


  this.setState({
    numberOfCards: numberOfCards,
    cards: cards,
    images: images,
  })

  console.log('numberOfCards', numberOfCards)
  console.log('cards', cards);
  console.log('images', images)
  console.log('Start the game!')
},


flipCard(cardID) {
  console.log('Klickade på kortet', cardID)

  let turnedCard = _.cloneDeep(this.state.cards);
  turnedCard[cardID].isFlipped=true

  let flipped = _.cloneDeep(this.state.flipped);

/* i objekt hämtar man saker med punkt. Men i detta fall
*/
  if(!_.isEqual(flipped[0], turnedCard[cardID])) {

    flipped.push(turnedCard[cardID])
  }

    this.setState({
      cards: turnedCard,
      flipped: flipped,

  }, () => {
    if (flipped.length === 2) {
    _.delay(this.compareCards, 500, flipped, turnedCard)
    }

    })
},

compareCards(flipped, turnedCard) {
  const cardOne = flipped[0]
  const cardTwo = flipped[1]
  if (cardOne.image.id === cardTwo.image.id) {
    delete turnedCard[cardOne.id]
    delete turnedCard[cardTwo.id]
  } else {
    turnedCard[cardOne.id].isFlipped = false
    turnedCard[cardTwo.id].isFlipped = false
  }

  this.setState({
    turnedCard: turnedCard,
    flipped: [],
  })
},

changeNumberOfCards(event)
{
  console.log(event.target.value)
  this.setState({ numberOfCards: Number(event.target.value)
  })

},

  render() {
    return (
      <div className="App">
        Yay!

        <Header />

        <Content
          cards={this.state.cards}
          numberOfCards={this.state.numberOfCards}
          flipCard={this.flipCard}
        />

        <Footer
          handleStartNewGame={this.handleStartNewGame}
          changeNumberOfCards={this.changeNumberOfCards}
          numberOfCards={this.state.numberOfCards}
        />

      </div>
    );
  }
})

export default App;
