// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [show, setShow] = useState(false)

//   return (
//     <>
//     <button onClick={()=> setShow(!show)}>
//       {show ? "Hide" : "visible"}
//     </button>
//     {show && <h1>Welcome Indresh</h1>}
//     </>
//   )
// }

// export default App
// import { useState } from "react";
import ToggleCard from "./Components/ToggleCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div className="grid">
        <ToggleCard title="Profile Section">
          <p>👤 Name: Indresh</p>
          <p>🚀 Role: React Developer</p>
        </ToggleCard>

        <ToggleCard title="Product Section">
          <p>📦 MacBook Pro M3</p>
          <p>💰 $2499</p>
        </ToggleCard>
        <ToggleCard title="Movies Section">
          <p>🎬 Name: Leo</p>
          <p>🔫 Genre: Action</p>
        </ToggleCard>

        <ToggleCard title="Message Section">
          <p>📩 You have 3 new notifications!</p>
        </ToggleCard>
      </div>
    </div>
  );
}
export default App;
