import React from "react";

function Header({ restartHandler }) {
  return (
    <header>
      <h1>Word Game</h1>
      <button className="restart-button" onClick={restartHandler}>
        Restart
      </button>
    </header>
  );
}

export default Header;
