import Card from "./Card";

function UserCard({ name, role }) {
  return (
    <Card>
      <h2>{name}</h2>
      <p>{role}</p>
    </Card>
  );
}

export default UserCard;