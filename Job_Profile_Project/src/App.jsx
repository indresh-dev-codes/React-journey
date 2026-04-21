import "./App.css";
import { useState } from "react";
import Img_1 from "./assets/iphone.jpg";
import Img_2 from "./assets/iphone2.jpg";
import Img_3 from "./assets/iphone3.png";
import PostCard from "./Components/PostCard";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      Product_Name: "Iphone",
      image: Img_1,
    },
    {
      id: 2,
      Product_Name: "Iphone",
      image: Img_2,
    },
    {
      id: 3,
      Product_Name: "Iphone",
      image: Img_3,
    },
  ]);
  const [dark, setDark] = useState(false);
  function deletePost(id) {
    setPosts(posts.filter((p) => p.id !== id));
  }
  return (
    <div className={dark ? "dark app" : "light app"}>
      <div className="container">
        <h1>Product Details</h1>
        <button className="toggle-btn" onClick={() => setDark(!dark)}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
        {posts.map((posts) => (
          <PostCard key={posts.id} {...posts} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
}

export default App;
