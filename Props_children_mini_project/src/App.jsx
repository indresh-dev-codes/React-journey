import "./App.css";
import ProductCard from "./Components/ProductCard";
import UserCard from "./Components/UserCard";
import PostCard from "./Components/PostCard";
import Card from "./Components/Card";
import HighlightCard from "./Components/HighlightCard";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
  ];

  const users = [
    { id: 1, name: "Indresh", role: "Frontend" },
    { id: 2, name: "Rahul", role: "Tester" },
  ];

  const posts = [
    { id: 1, username: "Indresh", content: "Learning React 🚀" },
    { id: 2, username: "Rahul", content: "Testing app today" },
  ];

  return (
    <div className="container">
      <h1>Reusable Card System 🚀</h1>
      <h2>Products</h2>
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}

      <h2>Users</h2>
      {users.map((u) => (
        <UserCard key={u.id} {...u} />
      ))}

      <h2>Posts</h2>
      {posts.map((p) => (
        <PostCard key={p.id} {...p} />
      ))}
      <Card>
        <h4>🔥 Featured</h4>
        <h2>Laptop</h2>
        <p>₹50000</p>
      </Card>
      <Card>
        <h2>Product</h2>
        <p>₹2000</p>
        <button>Buy</button>
      </Card>
      <HighlightCard color="green">
        <h2>Special Offer</h2>
        <p>50% Discount</p>
      </HighlightCard>

      <HighlightCard color="red">
        <h2>Out of Stock</h2>
      </HighlightCard>
    </div>
  );
}

export default App;
