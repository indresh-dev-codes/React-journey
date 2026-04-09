import { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <>
        <h1>Counter: {this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Change
        </button>
      </>
    );
  }
}
export default Counter;
