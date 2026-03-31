import "./App.css";
import Welcome from "./components/Welcome";
import ProductCard from "./components/ProductCard";
import Hello from "./components/Hello";
import Product from "./components/Product";
import ProfileCard from "./components/ProfileCard";
import { Header, name, age } from "./components/Utils";

function App() {
  return (
    <div>
      <Welcome />
      <ProductCard />
      <div>
        <Hello />
        <Product />
      </div>
      <div>
        <h1>{Header}</h1>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
      </div>
      <div>
        <br />
        <h1>This a JSX Attributes</h1>
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
