import React from 'react';
import './BingoRules.css';

export default function BingoRules() {

  return (
    <div className="bingo-rules">
      <h1 className="bingo-rules__heading">How to Play:</h1>
      <ol>
        <li>This game is played throughout the last season of Game of Thrones, but someone could win at any time depending on the level of carnage.</li>

        <li>Select the the number of cards you wish to generate. This should equal the number of people participating. But nothing is stoping you from going full blown bingo master and printing multiples.</li>

        <li>Select print and decide if you want to save as a PDF or send to your print.</li>

        <li>When the new season begins, watch Game of Thrones.</li>

        <li>Keep track of the characters on your card. If one should kick the bucket, simply mark that square.</li>

        <li>The goal is have your filled in squares make a continuous line. Vertical, Horizontal or Diagonal. The first person the get one completed, wins.</li>

      </ol>

      <h1 className="bingo-rules__heading">FAQ</h1>
      <p className="bingo-rules__question">What if the season has already started?</p>

      <p>All the possible characters in the generated cards are alive as of the beginning of the final season, but should you be playing mid season, you can still retroactively fill in your card. Just try not to cheat and regenerate your cards to you get a winning combo</p>

      <p className="bingo-rules__question">We are concerned that when the carnage begins, it will be impossible to know who one.</p>

      <p>If you are concerned that the lines will be too easy, consider adopt a pattern instead. There are various different bingo patterns you can play with such as creating Ts, Us or Squares. <a href="http://simonesmathresources.blogspot.com/2014/10/make-bingo-games-last-longer-with-fun.html" target="_blank">Here is a site that lists a few</a> (Didn’t want to link to a gambling website)</p>
    </div>
  );
}
