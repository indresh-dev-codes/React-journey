import heroImg from "../assets/pic.png";
function ProfileCard() {
  const isOnline = true;
  return (
    <div className="card">
      <img src={heroImg} alt="profile" className="profile-img" />
      <h2 className="name">Indresh</h2>
      <button
        className="btn"
        style={{ backgroundColor: isOnline ? "green" : "gray" }}
      >
        {isOnline ? "Online" : "Offline"}
      </button>
    </div>
  );
}
export default ProfileCard;
