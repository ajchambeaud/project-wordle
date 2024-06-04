import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  return <span className={status ? `cell ${status}` : "cell"}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) =>
        result ? <Cell key={num} {...result[num]} /> : <Cell key={num} />
      )}
    </p>
  );
}

export default Guess;
