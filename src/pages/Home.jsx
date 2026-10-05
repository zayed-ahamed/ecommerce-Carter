import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../services/productService";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

function Home() {
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.products
  );

  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts
  });

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

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
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Home;