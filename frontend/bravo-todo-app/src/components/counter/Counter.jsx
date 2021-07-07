import React, { Component } from "react";

import "./Counter.css";
import CounterButtons from "./CounterButtons";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="App">
        <CounterButtons
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButtons
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButtons
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className="count">{this.state.counter}</span>
        <div>
            <button onClick={this.reset} className="reset">Reset</button>
        </div>
      </div>
    );
  }

  increment(by) {
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  }

  decrement(by) {
    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  }

  reset() {
    this.setState({ counter: 0 });
  }
}

export default Counter;
