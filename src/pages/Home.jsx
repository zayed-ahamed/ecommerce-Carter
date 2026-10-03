import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";

function Home() {
  const {
    data: products,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts
  });

  if (isLoading) {
    return <h2>Loading products...</h2>;
  }

  if (isError) {
    return <h2>Failed to load products</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
          <p>Category: {product.category}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;