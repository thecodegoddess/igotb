/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component, Fragment } from 'react';
import Bingo from './Bingo';
import CHARACTERS from '../characters';
import './BingoGame.css';

export default class BingoGame extends Component {
  static printCards() {
    if (window.dataLayer && window.dataLayer.push) {
      window.dataLayer.push({
        action: 'printCards',
        category: 'updateCards',
        event: 'bingoClick',
        label: 'generateCards',
        value: 'print',
      });
    }

    window.print();
  }

  constructor(props) {
    super(props);

    this.state = {
      inputValue: 1,
      isGenerating: false,
      numberOfCards: 1,
      redditFriendly: true,
    };

    this.updateCards = this.updateCards.bind(this);
    this.reset = this.reset.bind(this);
    this.turnOffReddit = this.turnOffReddit.bind(this);
  }

  inputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  reset() {
    this.setState({
      numberOfCards: 0,
    });

    if (window.dataLayer && window.dataLayer.push) {
      window.dataLayer.push({
        action: 'reset',
        category: 'updateCards',
        event: 'bingoClick',
        label: 'generateCards',
        value: 0,
      });
    }
  }

  turnOffReddit() {
    if (window.dataLayer && window.dataLayer.push) {
      window.dataLayer.push({
        action: 'turnOffReddit',
        category: 'updateCards',
        event: 'bingoClick',
        label: 'generateCards',
        value: true,
      });
    }

    this.setState({ redditFriendly: false });
  }

  updateCards() {
    const {
      inputValue: newCardNumber,
    } = this.state;

    if (window.dataLayer && window.dataLayer.push) {
      window.dataLayer.push({
        action: 'updateValue',
        category: 'updateCards',
        event: 'bingoClick',
        label: 'generateCards',
        value: newCardNumber,
      });
    }

    this.setState(previousState => ({
      isGenerating: true,
      numberOfCards: previousState.inputValue,
    }),
    () => {
      window.setTimeout(() => {
        this.setState({
          isGenerating: false,
        });
      }, 500);
    });
  }

  render() {
    const {
      inputValue,
      isGenerating,
      numberOfCards,
      redditFriendly,
    } = this.state;

    let numberOfCardsToDisplay = numberOfCards;
    const cardList = [];

    while (numberOfCardsToDisplay) {
      cardList.push(<Bingo
        key={numberOfCardsToDisplay}
        redditFriendly={redditFriendly}
      />);
      numberOfCardsToDisplay -= 1;
    }
    return (
      <div>
        <div className="bingo-game">
          {(() => {
            if (!redditFriendly) {
              return null;
            }

            return (
              <p className="bingo-game__disclaimer">
                this is the reddit friendly version of the game. If you would like the
                other one, you can swap it here.
                <button
                  onClick={this.turnOffReddit}
                  type="button"
                >
                  Turn Off Reddit Friendly
                </button>
              </p>
            );
          })()}
          {(() => {
            if (numberOfCards > 1) {
              return null;
            }

            return (
              <Fragment>
                <p className="bingo-game__text">
                  With the final season upon us, the {redditFriendly ? 'survival' : 'Death'} of many characters looms in
                  the air.
                  So why not make a fun game out of it with Game of Thrones {redditFriendly ? 'Wights' : 'Death'} Bingo.
                  Play along
                  as characters you know and love as well as hate with a fiery passion
                  are {redditFriendly ? 'turned into Wights for the Night Kings army' : 'slaughtered'}.
                </p>
                <p className="bingo-game__text">
                  Select the number of cards you wish to generate and merely print. There are a
                  total of
                  {' '}
                  <strong>{CHARACTERS.length}</strong>
                  {' '}
                  possible characters for each
                  randomly generated board of
                  {' '}
                  <strong>25</strong>
                </p>
              </Fragment>
            );
          })()}
          <label htmlFor="numberTracker">
            Number of Cards
          </label>
          <input
            id="numberTracker"
            max="20"
            min="1"
            onChange={this.inputChange}
            type="number"
            value={inputValue}
          />
          <button
            className={inputValue !== numberOfCards ? 'active' : ''}
            id="generateCards"
            onClick={this.updateCards}
            type="button"
          >
            Generate Cards
          </button>
          <button
            id="resetCards"
            onClick={this.reset}
            type="button"
          >
            reset
          </button>
          <button
            id="printCards"
            onClick={BingoGame.printCards}
            type="button"
          >
            print
          </button>
        </div>
        {(() => {
          if (isGenerating) {
            return (
              <div className="bingo-game__loader"> generating cards...</div>
            );
          }
          return (
            cardList.map(card => (card))
          );
        })()}
      </div>
    );
  }
}
