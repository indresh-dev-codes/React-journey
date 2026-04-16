function ProductCard({ name, price, discount }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p style={{ textDecoration: "line-through" }}>Price:₹{price}</p>
      <p style={{ color: "green" }}>Discount:₹{discount}</p>

      <p>Final_Price: ₹{price - discount}</p>
    </div>
  );
}
export default ProductCard;