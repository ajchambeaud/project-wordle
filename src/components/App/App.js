import React, { useState } from "react";
import Game from "../Game";
import Header from "../Header";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const firstAnswer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ firstAnswer });

function App() {
  const [answer, setAnswer] = useState(firstAnswer);

  const restartHandler = () => {
    const nextAnswer = sample(WORDS);
    console.log({ nextAnswer });
    setAnswer(nextAnswer);
  };

  return (
    <div className="wrapper">
      <Header restartHandler={restartHandler} />

      <div className="game-wrapper">
        <Game key={answer} answer={answer} />
      </div>
    </div>
  );
}

export default App;
