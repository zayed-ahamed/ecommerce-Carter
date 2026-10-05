import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>

      <p>₹{product.price}</p>

      <p>Category: {product.category}</p>

      <p>Stock: {product.stock}</p>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;