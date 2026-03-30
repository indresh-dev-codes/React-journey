import "./App.css";
import heroImg from "./assets/pic.png";

function ProfileCard() {
  return (
    <div className="card">
      <img src={heroImg} alt="profile" className="card-img" />

      <h2>Indresh</h2>
      <p>Frontend Developer</p>

      <button className="btn">Follow</button>
    </div>
  );
}
function Welcome() {
  return (
    <div>
      <h2 className="heading2">Welcome to React</h2>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1 className="heading">Hi, I am Indresh 👋</h1>

      <p className="topic">I am learning React step by step</p>

      <button className="btn">Click Me</button>

      <Welcome />

      <img src={heroImg} alt="hero" className="img" width="200" />
      <ProfileCard />
    </div>
  );
}

export default App;
