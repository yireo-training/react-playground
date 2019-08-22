import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: this.getTime() };
  }

  getTime() {
    return new Date().toLocaleTimeString()
  }

  render() {
    return <h2>It is {this.state.time}.</h2>
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState(
        {time: this.getTime()}
    ), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Clock;