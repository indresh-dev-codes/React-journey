import "./App.css";
import { useState } from "react";
import ProductCard from "./Components/ProductCard";
import Search from "./Components/Search";
import LikeButton from "./Components/LikeButton";
import ToggleProfile from "./Components/ToggleProfile";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const products = [
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "Watch", price: 3000 },
    { id: 3, name: "Laptop", price: 50000 },
  ];

  return (
    <div className="container">
      <h1>🚀 Mini Dashboard</h1>

      {/* Counter */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
      <button onClick={() => setCount(count - 1)}>-</button>

      {/* Cart */}
      <h2>Cart Items: {cart}</h2>

      {/* Products */}
      <h2>Products</h2>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          price={p.price}
          addToCart={() => setCart(cart + 1)}
        />
      ))}

      {/* Search */}
      <h2>Search</h2>
      <Search />

      {/* Like */}
      <h2>Like</h2>
      <LikeButton />

      {/* Toggle */}
      <h2>Profile</h2>
      <ToggleProfile />
    </div>
  );
}

export default App;