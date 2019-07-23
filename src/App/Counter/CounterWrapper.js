import React, { Component, useState }  from "react";
import Counter from "./Counter";

class CounterWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  incrementCounter() {
    this.setState(function(oldState) {
      return { counter: oldState.counter + 1 };
    });
  }

  render() {
    return (
      <Counter
        counter={this.state.counter}
        onClickHandler={this.incrementCounter.bind(this)}
      />
    );
  }
}

export default CounterWrapper;
