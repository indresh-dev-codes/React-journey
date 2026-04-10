import { Component } from "react";
class Count extends Component {
  state = {
    count: 0,
  };
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}
export default Count;
