import React from "react";

class Greeting extends React.Component {
  state = {
    name: 'John',
    address: 'sdfsd'
  }

  setNameHandler = (event) => {
    event.preventDefault();
    this.setState({name:'Peter'});
  }

  render() {
    return (
      <React.Fragment>
        <p>Hello, {this.state.name}</p>
        <button onClick={this.setNameHandler}>click</button>
      </React.Fragment>
    );
  }
}

export default Greeting;
