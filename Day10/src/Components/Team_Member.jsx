function TeamCard({ name, role, isOnline }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
export default TeamCard;