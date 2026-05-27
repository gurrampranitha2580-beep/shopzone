import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome to ShopZone</h1>

        <p style={styles.subtitle}>
          Discover modern products with a seamless shopping
          experience.
        </p>

        <Link to="/shop">
          <button style={styles.button}>
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    height: "90vh",
    background:
      "linear-gradient(to right, rgba(17,24,39,0.9), rgba(31,41,55,0.7)), url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop') center/cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    padding: "20px",
  },

  overlay: {
    maxWidth: "700px",
  },

  title: {
    fontSize: "60px",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "20px",
    marginBottom: "30px",
    lineHeight: "1.6",
  },

  button: {
    padding: "14px 28px",
    background: "linear-gradient(to right, #2563eb, #7c3aed)",
    color: "white",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Home;