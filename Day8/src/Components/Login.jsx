import { Component } from "react";

class Login extends Component {
  state = { isLoggedIn: false };

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.login}>Login</button>
        {this.state.isLoggedIn && <h2>Welcome</h2>}
      </div>
    );
  }
}
export default Login;