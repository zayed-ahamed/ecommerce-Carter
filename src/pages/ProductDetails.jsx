import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import api from "../services/api";
import { addToCart } from "../redux/cartSlice";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const {
    data: product,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await api.get(`/products/${id}`);

      return response.data;
    }
  });

  if (isLoading) {
    return <h2>Loading product...</h2>;
  }

  if (isError) {
    return <h2>Failed to load product</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>{product.name}</h1>

      <p>Price: ₹{product.price}</p>

      <p>Category: {product.category}</p>

      <p>Stock: {product.stock}</p>

      <p>{product.description}</p>

      <img
        src={product.image}
        alt={product.name}
        width="300"
      />

      <br />

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;