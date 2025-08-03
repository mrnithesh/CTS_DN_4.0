import React, { Component } from 'react';

class CounterEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
    this.sayHello();
  };

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  sayHello = () => {
    this.setState({ message: "Hello! Button clicked." });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSynthetic = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event:", event);
  };

  render() {
    return (
      <div>
        <h2>Counter Events</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <p>{this.state.message}</p>

        <button onClick={() => this.sayWelcome("Welcome! Vanakkam!!")}>Say Welcome</button>

        <button onClick={this.handleSynthetic}>OnPress (Synthetic Event)</button>
      </div>
    );
  }
}

export default CounterEvents;
