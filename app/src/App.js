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
      gameOver: false
    }
  }

  clicked(e) {
    console.log(e.target);
    this.setState({
      turn: +!this.state.turn
    })
  }
  render() {
    return (
      <div id="main">
        <div id="head">
          KitchenMate Tic Tac Toe
        </div>
        <div id="board" onClick={(e)=>this.clicked(e)}>
          <Square turn={this.state.turn}/>
          <Square turn={this.state.turn}/>
          <Square turn={this.state.turn}/>
          <Square turn={this.state.turn}/>
          <Square turn={this.state.turn}/>
          <Square turn={this.state.turn}/>
          <Square turn={this.state.turn}/>
          <Square turn={this.state.turn}/>
          <Square turn={this.state.turn}/>
        </div>
      </div>
    );
  }
}

export default App;
