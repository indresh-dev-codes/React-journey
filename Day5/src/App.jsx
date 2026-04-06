import "./App.css";
import Box from "./Component/Box";
import Card from "./Component/Card";
import CardUser from "./Component/CardUser";
import Layout from "./Component/Layout";
import UserCard from "./Component/UserCard";

function App() {
  return (
    <div>
      <h1>Day5 of React</h1>
      <Card>
        <h2>Hello Indresh</h2>
        <p>This is inside Card</p>
        <br />
        <h2>Laptop</h2>
        <p>₹50000</p>
        <button>Add to Cart</button>
        <br />
        <br />
        <h2>User Profile</h2>
        <p>Name: Indresh</p>
        <p>Role: Developer</p>
        <br />
        <UserCard name="Indresh" role="Frontend" />
      </Card>
      <br />
      <Layout>
        <h3>Dynamic content using children</h3>
      </Layout>
      <br />
      <CardUser>
        <h2>Product: Laptop</h2>
        <p>Price: ₹50000</p>
        <button>Add to Cart</button>
      </CardUser>
      <br />
      <CardUser>
        <h2>User: Indresh</h2>
        <p>Role: Frontend</p>
        <br />
        <Card>
          <h2>Product: Laptop</h2>
          <p>Price: ₹50000</p>
          <button>Add to Cart</button>
        </Card>
      </CardUser>
      <br />
      <Box>
        <h2>Title</h2>
        <p>Description</p>
      </Box>
      <br />
      <CardUser>
        <h2>User: Indresh</h2>
        <p>Role: Frontend</p>
        <br />
        <Card>
          <h2>Product: Laptop</h2>
          <p>Price: ₹50000</p>
          <button>Add to Cart</button>
        </Card>
      </CardUser>
    </div>
  );
}

export default App;
