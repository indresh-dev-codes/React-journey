import { useState } from "react";
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>

      {isLoggedIn && <h2>Welcome User</h2>}
    </div>
  );
}
export default Login;
