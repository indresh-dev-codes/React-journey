import { Component } from "react";

class Cart extends Component {
  state = {
    items: 0,
  };
  addItem = () => {
    this.setState({
      items: this.state.items + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Items:{this.state.items}</h2>
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}
export default Cart;