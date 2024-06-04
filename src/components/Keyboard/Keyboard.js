import React from "react";
import { checkGuess } from "../../game-helpers";

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const getBestStatus = (statusA, statusB) => {
  const statusRanking = { incorrect: 0, misplaced: 1, correct: 2 };
  return statusRanking[statusA] > statusRanking[statusB] ? statusA : statusB;
};

function getKeyStatus(guesses, answer) {
  return guesses
    .map((guess) => checkGuess(guess, answer))
    .flat()
    .reduce((result, { letter, status }) => {
      result[letter] = result[letter]
        ? getBestStatus(result[letter], status)
        : status;
      return result;
    }, {});
}

function Key({ status, children }) {
  return <div className={`keyboard-key ${status}`}>{children}</div>;
}

function Row({ children }) {
  return <div className={`keyboard-row`}>{children}</div>;
}

function Keyboard({ guesses, answer }) {
  const keyStatusMap = getKeyStatus(guesses, answer);

  console.log({ keyStatusMap });

  return (
    <div className="keyboard-wrapper">
      {keys.map((row, index) => (
        <Row key={index}>
          {row.map((letter) => (
            <Key key={letter} status={keyStatusMap[letter]}>
              {letter}
            </Key>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default Keyboard;
