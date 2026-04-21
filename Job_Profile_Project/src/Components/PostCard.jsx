import { useState } from "react";
import CommentBox from "./CommentBox";
function PostCard({ id, Product_Name, image, onDelete }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [saved, setSaved] = useState(false);
  function handleLike() {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  }
  return (
    <div className={`card ${liked ? "liked" : ""}`}>
      <h3>{Product_Name}</h3>
      <img
        src={image}
        alt="post"
        className="post-img"
        style={{ width: "150px" }}
      />
      <div className="actions">
        <button onClick={handleLike}>
          {liked ? "Liked" : "Like"} ({count})
        </button>
        <button onClick={() => setSaved(!saved)} className={saved ? "saved-btn" : ""}>
          {saved ? "Saved" : "Save"}
        </button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
      <CommentBox />
    </div>
  );
}
export default PostCard;
