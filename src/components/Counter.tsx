import React, { Component } from "react";


export default class Counter extends Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <p>Counter : {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}