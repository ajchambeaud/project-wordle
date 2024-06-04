import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import Keyboard from "../Keyboard";

function Game({ answer }) {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("in-progress");

  const submitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];

    if (guess == answer || nextGuesses.length == NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(guess == answer ? "won" : "lost");
    }

    setGuesses(nextGuesses);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput submitGuess={submitGuess} gameStatus={gameStatus} />
      {gameStatus == "won" && <WonBanner attempts={guesses.length} />}
      {gameStatus == "lost" && <LostBanner answer={answer} />}
      <Keyboard guesses={guesses} answer={answer} />
    </>
  );
}

export default Game;
