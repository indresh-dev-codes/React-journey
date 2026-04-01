import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/pic.png";
import "./App.css";
import Profile from "./Components/Profile";
import Product from "./Components/Product";
import { Status } from "./Components/Profile";
import ProfileClass from "./Components/ProfileClass";
import ProfileCard from "./Components/ProfileCard";
import Users from "./Components/Users";
import ProductDetails from "./Components/ProductDetails";
import ProfileDetails from "./Components/ProfileDetails";
function App() {
  return (
    <div>
      <h1>Day-3 of React</h1>
      <Profile name="Indresh" img={heroImg} role="Frontend Developer" />
      <Status isOnline={true} />
      <Profile name="Rahul" img={heroImg} role="Tester" />
      <Status isOnline={false} />

      <br />
      <div>
        <Product title="Shoes" price={1999} />
        <Product title="Watch" price={2999} />
      </div>
      <br />
      <br />
      <div>
        <ProfileClass name="Indresh" role="BackEnd" />
        <Status isOnline={true} />
        <ProfileClass name="Teja" role="CyberSecurity" />
        <Status isOnline={false} />
      </div>
      <br />
      <br />
      <div>
        <ProfileCard name="Indresh" role="Frontend Dev" isOnline={true} /><br />
        <ProfileCard name="Rahul" role="Tester" isOnline={false} />
      </div>
      <br />
      <div>
        <Users name="Indresh" age={23}/>
      </div>
      <br />
      <br />
      <div>
        <ProductDetails title="Laptop" price={50000}/>
      </div>
      <br />
      <div>
        <ProfileDetails name="Indresh" role="Frontend Dev" img={heroImg} isOnline={true} />
      </div>
      <br />
      <br />
      <div>
        <ProfileDetails name="Indresh" role="Frontend Dev" img={heroImg} isOnline={false} />
      </div>
    </div>
  );
}

export default App;

