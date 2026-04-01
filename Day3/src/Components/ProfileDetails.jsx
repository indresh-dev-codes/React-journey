function ProfileDetails(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Role: {props.role}</h4>

      <img src={props.img} alt="" style={{ width: 150 }} />
      <br />
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

export default ProfileDetails;
// Destructuring
// function ProfileDetails({ name, role, img, isOnline }) {
//   return (
//     <div>
//       <h2>Name: {name}</h2>
//       <h4>Role: {role}</h4>

//       <img src={img} alt="" style={{ width: "150px" }} />

//       <button
//         style={{
//           backgroundColor: isOnline ? "green" : "red",
//           color: "white",
//         }}
//       >
//         {isOnline ? "Online" : "Offline"}
//       </button>
//     </div>
//   );
// }