import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.state = { active: true, counter: 1 };
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
    return null;
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>Increment</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;
