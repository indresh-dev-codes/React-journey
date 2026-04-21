import { useState } from "react";

function CommentBox() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addComment() {
    if (comment.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...comments];
      updated[editIndex] = comment;
      setComments(updated);
      setEditIndex(null);
    } else {
      setComments([...comments, comment]);
    }

    setComment("");
  }

  function deleteComment(index) {
    setComments(comments.filter((_, i) => i !== index));

    if (editIndex === index) {
      setEditIndex(null);
      setComment("");
    }
  }

  function editComment(index) {
    setComment(comments[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add comment..."
      />

      <button onClick={addComment}>
        {editIndex !== null ? "Update ✏️" : "Post"}
      </button>

      {comments.map((c, i) => (
        <div key={i} style={{ marginTop: "5px", padding: "5px" }}>
          <span>{c}</span>

          <button
            onClick={() => editComment(i)}
            style={{ alignItems: "baseline", margin: "5px" }}
          >
            ✏️
          </button>

          <button onClick={() => deleteComment(i)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default CommentBox;
