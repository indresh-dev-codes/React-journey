function ProductCard(props) {
  return (
    <div className="card">
      <h2>Name:{props.name}</h2>
      <img src={props.img} alt={props.name} width="120" />

      <p style={{ textDecoration: "line-through", color: "gray" }}>
        ₹{props.price}
      </p>

      <p style={{ color: "green", fontWeight: "bold" }}>₹{props.discount}</p>

      <p style={{ color: "red" }}>Save ₹{props.price - props.discount}</p>
    </div>
  );
}
export default ProductCard;
