import Card from "./Card";

function PostCard({ username, content }) {
  return (
    <Card>
      <h3>{username}</h3>
      <p>{content}</p>
    </Card>
  );
}

export default PostCard;