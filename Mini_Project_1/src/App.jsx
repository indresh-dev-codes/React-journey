import { useState } from 'react'; // import the useState from react.
import './App.css'; //import the css file.

function App() {
  const [count, setCount] = useState(0); // To declare the state mangement for to intial value assgin to count value.
  const [bgColor, setBgColor] = useState('#ffffff'); //To declare the state mangement for thr bg color to assgin the intial color.
  const stock = 10; // To set the stock value.

  const resetCount = () => setCount(0); // TO declare the state mangement for the resetCount value.

  return (
    
    <div className="app-wrapper" style={{ backgroundColor: bgColor }}> {/*To create a one div container for the background color change and to display the elements.*/}
      <div className="counter-card"> {/*To create the container to display the Counter app content in the page.*/}
        <h1>Counter App</h1> {/*This is the headding tag.*/}
        
        <div className="display-section"> {/* To create the another container for the counter content to display.*/}
          <p>Count: <strong>{count}</strong></p>{/* By using the state mangement to update the counter value that will be display here. */}
          {count === stock && <small className="warning">Max Stock Reached!</small>}
        </div>{/*Close the counter context container.*/}

        <div className="button-group">{/*This is a container for the group the all buttons*/}
          
          <button 
            onClick={() => setCount(count + 1)} 
            disabled={count === stock}
          >
            Increase
          </button>

          
          <button 
            onClick={() => setCount(count - 1)} 
            disabled={count === 0}
          >
            Decrease
          </button>

          
          <button onClick={resetCount} className="reset-btn">
            Reset
          </button>
        </div>

        <div className="color-section">
          <label>Change Background: </label>
          <input 
            type="color" 
            value={bgColor} 
            onChange={(e) => setBgColor(e.target.value)} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;