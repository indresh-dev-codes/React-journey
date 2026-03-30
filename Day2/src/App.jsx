import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Welcome from "./components/Welcome";
import ProductCard from "./components/ProductCard";
import Hello from "./components/Hello";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Welcome />
      <ProductCard />
      <div>
        <Hello />
        <Product/>
      </div>
    </div>
  );
}

export default App;
