import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={styles.image}
      />

      <div style={styles.content}>
        <h3>{product.title}</h3>

        <p style={styles.price}>${product.price}</p>

        <Link to={`/product/${product.id}`}>
          <button style={styles.button}>
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "rgba(255,255,255,0.9)",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  content: {
    padding: "18px",
  },

  price: {
    margin: "12px 0",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2563eb",
  },

  button: {
    width: "100%",
    padding: "12px",
    background:
      "linear-gradient(to right, #2563eb, #7c3aed)",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "bold",
  },
};

export default ProductCard;