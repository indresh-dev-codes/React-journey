function ProfileCard({ name, role, isOnline }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
      <button
        style={{
          backgroundColor: isOnline ? "green" : "gray",
          color: "white",
        }}
      >
        {isOnline ? "Online" : "Offline"}
      </button>
    </div>
  );
}
export default ProfileCard;