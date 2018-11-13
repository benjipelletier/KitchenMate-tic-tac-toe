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
      winner: "",
      gameOver: false,
      board: Array(9).fill(-1),
      wins: [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [2, 4, 6]]
    }
  }

  restart = () => {
    this.setState({
      turn: 0,
      newGame: true,
      gameOver: false,
      winner: "",
      board: Array(9).fill(-1)
    })
  }




  clicked = (id, val) => {
    const newBoard = this.state.board.map((x, i) => i == id ? val : x)
    this.checkWinner(newBoard)
    this.checkDraw(newBoard)
    this.setState({
      newGame: false,
      board: newBoard,
      turn: +!this.state.turn
    })
    console.log(this.state.board, newBoard)
    
  }

  checkDraw(board) {
    for (let i = 0; i < board.length; ++i) {
      if ((board[i]) == -1) return false
    }
    this.setState({
      gameOver: true,
      winner: "Tie!"
    })
  }

  checkWinner(board) {
    let wins = this.state.wins
    for (let i = 0; i < this.state.wins.length; ++i) {
      if (board[wins[i][0]] == board[wins[i][1]] && board[wins[i][1]] == board[wins[i][2]] && board[wins[i][2]] != -1) {
        this.setState({
          gameOver: true,
          winner: board[wins[i][2]] ? "Donut" : "Cinnamon Stick"
        })
      }
    }
  }
  render() {
    return (
      <div id="main">
        <div id="head">
          KitchenMate Tic Tac Toe
        </div>
        <div id="board">
          {this.state.board.map((placed, i) => (
            <Square turn={this.state.turn} key={i} id={i} gameOver={this.state.gameOver} newGame={this.state.newGame} 
                    filled={placed} callBack={this.clicked}/>)
            )}
        </div>
        <button onClick={this.restart}>Restart</button>
        {this.state.gameOver && <h1>{this.state.winner} {this.state.winner != "Tie!" && "Wins"}</h1>}
      </div>
    );
  }
}

export default App;
