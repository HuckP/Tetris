import React, { Component } from "react";
import "./App.css";

const Tetris = require("react-tetris");

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">TETRIS</h1>
        <Tetris>
          {({ HeldPiece, Gameboard, PieceQueue, points, linesCleared }) => {
            // Render it however you'd like
            return (
              <div>
                <div className="left-box">
                  <HeldPiece />
                </div>
                <div className="right-box">
                  <PieceQueue />
                </div>
                <div>
                  <div>awefawef</div>
                  <div className="none-box">
                    <Gameboard />
                    <p>Points: {points}</p>
                    <p>Lines Cleared: {linesCleared}</p>
                  </div>
                </div>
              </div>
            );
          }}
        </Tetris>
      </div>
    );
  }
}

export default App;
