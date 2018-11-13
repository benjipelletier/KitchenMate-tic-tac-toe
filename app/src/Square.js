import React, { Component } from 'react';
import donut from './donut.svg';
import cinnamon from './cinnamon_sticks.svg'
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      img: ""
    }
  }

  clicked(e) {
    console.log(e.target);
    this.setState({
      img: this.props.turn ? donut : cinnamon
    })
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
