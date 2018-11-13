import React, { Component } from 'react';
import logo from './logo.svg';
import donut from './donut.svg';
import cinnamon from './cinnamon_sticks.svg'
import Square from './Square.js';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      turn: 0,
      newGame: true,
      gameOver: false,
      board: Array(9).fill(-1),
      wins: [[]]
    }
  }

  restart = () => {
    this.setState({
      turn: 0,
      newGame: true,
      gameOver: false,
      board: Array(9).fill(-1)
    })
  }


  clicked = (id, val) => {
    console.log(this.state)
    const newBoard = this.state.board.map((x, i) => i == id ? val : x)
    this.setState({
      newGame: false,
      board: newBoard,
      turn: +!this.state.turn
    })
  }

  checkWinner() {

  }
  render() {
    return (
      <div id="main">
        <div id="head">
          KitchenMate Tic Tac Toe
        </div>
        <div id="board">
          {this.state.board.map((placed, i) => (
            <Square turn={this.state.turn} key={i} id={i} newGame={this.state.newGame} 
                    filled={placed} callBack={this.clicked}/>)
            )}
        </div>
        <button onClick={this.restart}>Restart</button>
      </div>
    );
  }
}

export default App;
