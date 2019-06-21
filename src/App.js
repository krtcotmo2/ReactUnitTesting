import React, { Component } from 'react';
import CounterPiece from "./CounterPiece";
import './App.css';

export const doIncrement = (prevState) => {
  //let arr = prevState.extraValue.concat([prevState.counter + 1]);
  return {
    counter: prevState.counter + 1,
    //extraValue: arr
  }};


export const doDecrement = (prevState) => {
  //let arr = prevState.extraValue.filter((item, i) => i !== prevState.extraValue.length -1);
  return {
    counter: prevState.counter - 1,
    //extraValue: arr
  }};

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      extraValue: [0]
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }
  render(){
    const { counter } = this.state;

    return (
      <div className="App">
        <h1>My Counter</h1>
        <Counter counter={counter} />

        <button type="button" onClick={this.onIncrement}>
          Increment
        </button>

        <button type="button" onClick={this.onDecrement}>
          Decrement
        </button>
        <CounterPiece stateValue={this.state} clickEventI={this.onIncrement} clickEventD={this.onDecrement} >

        </CounterPiece>
      </div>
    );
  };  
};
export const Counter = ({ counter }) =>
  <p>{counter}</p>

export default App;
