import "./App.css";
import { useState } from "react";
import Search from "./Components/Search";
import LikeButton from "./Components/LikeButton";
import Login from "./Components/Login";
import Counter from "./Components/ClassComponent";
function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>Day7 of React</h1>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <br />
      <button onClick={decrease}>Decrease</button>
      <br />
      <h2>Cart Items: {items}</h2>
      <button
        onClick={() => {
          setItems(items + 1);
        }}
      >
        Add Item
      </button>
      <br />
      <Search />
      <br />
      <LikeButton />
      <br />
      <Login />
      <br />
      <Counter />
    </>
  );
}

export default App;

// import { useState } from "react";

// const [value, setValue] = useState(initialValue);

//  Meaning:
// Part	       Meaning
// value	     current data
// setValue	   function to update data
// useState()	  initial value

// Flow:
// Click button → event fires
// setCount() updates state
// UI re-renders automatically


// Feature	  useState	  setState
// Used in	  Functional	 Class
// Modern	  ✅ YES	     ❌ OLD
// Syntax	   simple	    complex
// Usage	      hooks	    lifecycle