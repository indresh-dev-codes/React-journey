import Card from "./Card";

function ProductCard({ name, price }) {
  return (
    <Card>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <button>Add to Cart</button>
    </Card>
  );
}

export default ProductCard;
