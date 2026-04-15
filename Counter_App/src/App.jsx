import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  let [bgColor, setBgColor] = useState("#ffffff");

  const stock = 10;

  function getTextColor(color) {
    const c = color.substring(1);
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128 ? "#ffffff" : "#000000";
  }

  return (
    <>
      <h1 className="heading" style={{ color: getTextColor(bgColor) }}>
        Counter App
      </h1>

      <div className="Wrapper">
        <button
          className="minus"
          disabled={counter === 0}
          onClick={() => counter > 0 && setCounter(counter - 1)}
        >
          -
        </button>
        <p>{counter}</p>
        <button
          className="plus"
          disabled={counter === stock}
          onClick={() => counter < stock && setCounter(counter + 1)}
        >
          +
        </button>
        <br />
        <input
          type="color"
          onChange={(e) => {
            setBgColor(e.target.value);
            document.body.style.backgroundColor = e.target.value;
          }}
        />
      </div>
    </>
  );
}

export default App;
