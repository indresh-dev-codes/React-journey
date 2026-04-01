function Profile(props)
{
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <img src= {props.img} alt="" style={{width: 150}}/>
            <h3>Role: {props.role}</h3>
        </div>
    );
}

export function Status({ isOnline }) {
  return (
    <h2 style={{ color: isOnline ? "green" : "red" }}>
      {isOnline ? "Online" : "Offline"}
    </h2>
  );
}

// Destructuring
// function Profile({ name, img, role }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src= {img} alt="" style={{width:150}} />
//       <p>{role}</p>
//     </div>
//   );
// }

export default Profile;