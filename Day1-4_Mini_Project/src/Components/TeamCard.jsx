function TeamCard(props) {
  return (
    <div className="card">
      <h3>Name: {props.name}</h3>
      <p>Role: {props.role}</p>

      <p style={{ color: props.isOnline ? "green" : "red" }}>
        {props.isOnline ? "🟢 Online" : "🔴 Offline"}
      </p>
    </div>
  );
}
export default TeamCard;