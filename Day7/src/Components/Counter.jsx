import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <>
      <h2>Task Counter: {count}</h2>
      <button onClick={increase}>Increase</button>
      <br />
      <button onClick={decrease}>Increase</button>
    </>
  );
}
export default Count;
