import React, { useState } from "react";

function GuessInput({ submitGuess, gameStatus }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    submitGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern=".{5}"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        required
        disabled={gameStatus != "in-progress"}
      />
    </form>
  );
}

export default GuessInput;
