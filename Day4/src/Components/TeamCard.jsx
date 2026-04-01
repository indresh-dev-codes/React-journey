function TeamCard(props) {
  return (
    <div style={{margin:"30px auto", border:"solid 2px white", padding:"10px", width:"1050px"}}>
      <h2>Name: {props.name}</h2>
      <p>Role: {props.role}</p>
      <button
        style={{
          backgroundColor: props.isOnline ? "green" : "red",
          color: "white",
        }}
      >
        {props.isOnline ? "Online" : "Offline"}
      </button>
    </div>
  );
}

export default TeamCard;