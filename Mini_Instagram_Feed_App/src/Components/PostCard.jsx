import { useState } from "react";
import CommentBox from "./CommentBox";

function PostCard({ id, username, content, image, onDelete }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [saved, setSaved] = useState(false);

  function handleLike() {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  }

  return (
    <div className={`card ${liked ? "liked" : ""}`}>
      <h3>{username}</h3>
      <p>{content}</p>

      <img src={image} alt="post" className="post-img" />

      <div className="actions">
        {/* Like */}
        <button onClick={handleLike}>
          {liked ? "❤️ Liked" : "🤍 Like"} ({count})
        </button>

        {/* Save */}
        <button onClick={() => setSaved(!saved)}>
          {saved ? "💾 Saved" : "🤍 Save"}
        </button>

        {/* Delete */}
        <button onClick={() => onDelete(id)}>
          ❌ Delete
        </button>
      </div>

      {/* Comments */}
      <CommentBox />
    </div>
  );
}

export default PostCard;