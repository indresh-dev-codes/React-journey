import { useState } from "react";

function CommentBox() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addComment() {
    if (comment.trim() === "") return;

    // ✏️ UPDATE COMMENT
    if (editIndex !== null) {
      const updated = [...comments];
      updated[editIndex] = comment;
      setComments(updated);
      setEditIndex(null);
    } else {
      // ➕ ADD NEW COMMENT
      setComments([...comments, comment]);
    }

    setComment("");
  }

  function deleteComment(index) {
    setComments(comments.filter((_, i) => i !== index));

    // reset edit if deleting same item
    if (editIndex === index) {
      setEditIndex(null);
      setComment("");
    }
  }

  function editComment(index) {
    setComment(comments[index]); // fill input
    setEditIndex(index);         // track index
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
        <div key={i} style={{ marginTop: "5px" }}>
          <span>{c}</span>

          <button onClick={() => editComment(i)}>
            ✏️
          </button>

          <button onClick={() => deleteComment(i)}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default CommentBox;