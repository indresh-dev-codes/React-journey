import "./App.css";
import Profile from "./Components/Profile";
import ProductCard from "./Components/ProductCard";
import TeamCard from "./Components/Team_Member";
function App() {
  const items = [
    {
      id: 1,
      name: "Apple",
      price: 200,
      discount: 5,
    },
    {
      id: 2,
      name: "Mango",
      price: 250,
      discount: 3,
    },
    {
      id: 3,
      name: "Kiwi",
      price: 300,
      discount: 4,
    },
  ];
  const person = [
    {
      id: 1,
      name: "Indresh",
      role: "Learning React 🚀",
    },
    {
      id: 2,
      name: "Rahul",
      role: "Testing UI today",
    },
    {
      id: 3,
      name: "Teja",
      role: "Cyber security 🔐",
    },
  ];
const Team = [
    {
      id: 1,
      name: "Indresh",
      role: "Learning React 🚀",
      isOnline: true,
    },
    {
      id: 2,
      name: "Rahul",
      role: "Testing UI today",
      isOnline: true,
    },
    {
      id: 3,
      name: "Teja",
      role: "Cyber security 🔐",
      isOnline: false,
    },
  ];
  return (
    <>
      {person.map((person) => (
        <Profile key={person.id} {...person} />
      ))}
      {items.map((items)=>(
        <ProductCard key={items.id} {...items}/>
      ))}
      {Team.map((Team)=>(
        <TeamCard key={Team.id} {...Team}/>
      ))}
    </>
  );
}

export default App;
