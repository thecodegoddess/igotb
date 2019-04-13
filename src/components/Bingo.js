/* eslint-disable react/no-array-index-key */
// @flow
import React, { Component } from 'react';
import type { CharacterType } from '../characters';
import CHARACTERS from '../characters';
import shuffle from '../shuffle';
import './Bingo.css';

type BingoType = {|
  redditFriendly: boolean,
|}

class Bingo extends Component<BingoType> {
  constructor(props: BingoType) {
    super(props);

    this.rows = [];
    const gameBoardCharacters = shuffle(CHARACTERS).slice(0, 25);

    while (gameBoardCharacters.length) {
      this.rows.push(gameBoardCharacters.splice(0, 5));
    }
  }

  rows: Array<Array<CharacterType>>;

  render() {
    return (
      <table className="bingo">
        <thead>
          <tr>
            <th colSpan="5">
            Game of Thrones - {this.props.redditFriendly ? 'Character' : 'Death'} Bingo
            </th>
          </tr>
        </thead>
        <tbody>
          {
            this.rows.map((row, idx) => (
              <tr key={idx}>
                {
                  row.map(character => (
                    <td key={character.name}>
                      {
                        (() => {
                          if (!character.img) {
                            return null;
                          }
                          return (
                            <img
                              alt=""
                              src={character.img}
                            />
                          );
                        })()
                      }
                      <span className="bingo__name">{character.name}</span>
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default Bingo;
