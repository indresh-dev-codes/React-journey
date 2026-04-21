import "./App.css";
import { useState } from "react";
import PostCard from "./Components/PostCard";
import hero_Img from "./assets/pic.png";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Indresh",
      content: "Learning React 🚀",
      image: hero_Img,
    },
    {
      id: 2,
      username: "Rahul",
      content: "Testing UI today",
      image: hero_Img,
    },
    {
      id: 3,
      username: "Teja",
      content: "Cyber security 🔐",
      image: hero_Img,
    },
  ]);

  const [dark, setDark] = useState(false);

  function deletePost(id) {
    setPosts(posts.filter((p) => p.id !== id));
  }

  return (
    <div className={dark ? "dark app" : "light app"}>
      <div className="container">
        <h1>📸 Instagram Feed</h1>

        <button className="toggle-btn" onClick={() => setDark(!dark)}>
          {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        {posts.map((post) => (
          <PostCard key={post.id} {...post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
}

export default App;