import heroImg from "./assets/fruit.jpg";
import "./App.css";
import UserCard from "./Components/UserCard";
import ProductCard from "./Components/ProductCard";
import TeamCard from "./Components/TeamCard";
import Pots from "./Components/Post";
import Fruits from "./Components/Fruits";

function App() {
  const users = [
    { id: 1, name: "Indresh", role: "Frontend" },
    { id: 2, name: "Rahul", role: "Tester" },
    { id: 3, name: "Teja", role: "Cyber" },
  ];

  const products = [
    { id: 1, name: "Shoes", img: heroImg, price: 1999 },
    { id: 2, name: "Watch", img: heroImg, price: 2999 },
    { id: 3, name: "Laptop", img: heroImg, price: 50000 },
  ];

  const team = [
    { id: 1, name: "Indresh", role: "Frontend", isOnline: true },
    { id: 2, name: "Rahul", role: "BackEnd", isOnline: false },
    { id: 3, name: "Teja", role: "Tester", isOnline: true },
  ];

  const posts = [
    { id: 1, name: "Indresh", content: "Learning React 🚀" },
    { id: 2, name: "Rahul", content: "Testing app today" },
  ];

  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
  ];

  return (
    <div
      style={{
        border: "1px solid #dbb769",
        margin: "10px auto",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <h1>Day4 of React</h1>

      <h2>Users</h2>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} role={user.role} />
      ))}

      <h2>Products</h2>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
        />
      ))}

      <h2>Team</h2>
      {team.map((t) => (
        <TeamCard
          key={t.id}
          name={t.name}
          role={t.role}
          isOnline={t.isOnline}
        />
      ))}

      <h2>Posts</h2>
      {posts.map((p) => (
        <Pots key={p.id} name={p.name} content={p.content} />
      ))}

      <h2>Fruits</h2>
      {fruits.map((f) => (
        <Fruits key={f.id} name={f.name} />
      ))}
    </div>
  );
}

export default App;
