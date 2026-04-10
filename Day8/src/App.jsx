import "./App.css";
import Counter from "./Components/Counter";
import Count from "./Components/Count";
import { Component } from "react";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };

    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <h1>Class Components</h1>
        <br />
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.increase}>Click</button>
        <br />
        <h2>Counter</h2>
        <Counter />
        <br />
        <Count />
        <br />
        <Cart />
        <br />
        <Login />
      </>
    );
  }
}

export default App;
