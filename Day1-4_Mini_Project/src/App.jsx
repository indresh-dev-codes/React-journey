import "./App.css";
import UserCard from "./Components/UserCard";
import ProductCard from "./Components/ProductCard";
import TeamCard from "./Components/TeamCard";
import productImg from "./assets/fruit.jpg";

function App() {
  const users = [
    { id: 1, name: "Indresh", role: "Frontend" },
    { id: 2, name: "Rahul", role: "Tester" },
    { id: 3, name: "Teja", role: "Cyber" },
    { id: 4, name: "Amit", role: "Backend" },
    { id: 5, name: "Sneha", role: "UI/UX" },
  ];

  const products = [
    { id: 1, name: "Shoes", img: productImg, price: 2000, discount: 1500 },
    { id: 2, name: "Watch", img: productImg, price: 3000, discount: 2500 },
    { id: 3, name: "Laptop", img: productImg, price: 50000, discount: 45000 },
    { id: 4, name: "Phone", img: productImg, price: 25000, discount: 22000 },
    { id: 5, name: "Headphones", img: productImg, price: 4000, discount: 3200 },
  ];

  const team = [
    { id: 1, name: "Indresh", role: "Frontend", isOnline: true },
    { id: 2, name: "Teja", role: "Backend", isOnline: false },
  ];

  return (
    <div className="container">
      <h1>🛒 Mini E-Commerce Dashboard</h1>

      {/* Users */}
      <h2>Users</h2>
      {users.map((u) => (
        <UserCard key={u.id} name={u.name} role={u.role} />
      ))}

      {/* Products */}
      <h2>Products</h2>

      {products.length === 0 ? (
        <p>No Products Available ❌</p>
      ) : (
        products.map((p) => <ProductCard key={p.id} {...p} />)
      )}

      {/* Team */}
      <h2>Team</h2>
      {team.map((t) => (
        <TeamCard key={t.id} {...t} />
      ))}
    </div>
  );
}

export default App;
