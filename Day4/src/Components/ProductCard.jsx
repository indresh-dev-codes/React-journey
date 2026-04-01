function ProductCard(props) {
  return (
    <div style={{margin:"30px auto", border:"solid 2px white", padding:"10px", width:"1050px"}}>
      <h2>Product-Name: {props.name}</h2>
      <img src={props.img} alt="" style={{ width: "150px" }} />
      <p>Price:₹{props.price} </p>
    </div>
  );
}
export default ProductCard;

// function ProductCard({ name, img, price }) {
//   return (
//     <div
//       style={{
//         margin: "20px auto",
//         border: "2px solid white",
//         padding: "10px",
//         width: "250px",
//         borderRadius: "8px",
//         textAlign: "center",
//       }}
//     >
//       <h2>{name}</h2>
//       <img src={img} alt={name} style={{ width: "150px" }} />
//       <p>Price: ₹{price}</p>
//     </div>
//   );
// }

// export default ProductCard;