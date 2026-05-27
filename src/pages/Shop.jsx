import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";

import { fetchProducts } from "../services/api";

function Shop() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <h2 style={styles.loading}>Loading products...</h2>;
  }

  return (
    <>
      <h1 style={styles.heading}>Explore Products</h1>

      <div style={styles.container}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

const styles = {
  heading: {
    textAlign: "center",
    fontSize: "42px",
    marginTop: "30px",
    color: "#111827",
  },

  container: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    padding: "30px",
    background:
      "linear-gradient(to bottom right, #eef2ff, #f5f3ff)",
    minHeight: "100vh",
  },

  loading: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default Shop;