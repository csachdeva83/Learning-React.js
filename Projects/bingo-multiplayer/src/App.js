import React from "react";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <h1 className="header">MULTIPLAYER BINGO</h1>
      <div className="board-row">
        <Board />
      </div>
    </div>
  );
}

export default App;
