import React, { Component } from 'react';
import donut from './donut.svg';
import cinnamon from './cinnamon_sticks.svg'
import './App.css';

class App extends Component {
  
  constructor(props) {
    super();
    this.state = {
      img: ""

    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newGame) {
      this.setState({
        img: ""
      })
    }
  }
  clicked(e) {
    if (this.props.filled == -1 && !this.props.gameOver) {
      this.setState({
        turn: this.props.turn,
        img: this.props.turn ? donut : cinnamon
      })
      this.props.callBack(this.props.id, this.props.turn);
    }
  }
  render() {
    return (
          <div className="square" onClick={(e)=>this.clicked(e)}>
            <img src={this.state.img} alt=""/>
          </div>
    );
  }
}

export default App;
