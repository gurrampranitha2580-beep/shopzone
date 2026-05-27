import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function ProductDetails(){

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try{
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();

        setProduct(data);
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false);
      }
    }

    getProduct();
  },[id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    },1500);
  }

  if(loading){
    return <h2 style={styles.loading}>Loading product...</h2>
  }

  return(
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={styles.image}
        />

        <div style={styles.details}>
          <h1>{product.title}</h1>

          <p style={styles.price}>${product.price}</p>

          <p style={styles.description}>
            {product.description}
          </p>

          <button
            style={{
              ...styles.button,
              background: added ? "#16a34a" : "#111827"
            }}
            onClick={handleAddToCart}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container:{
    padding:"40px",
    display:"flex",
    justifyContent:"center"
  },

  card:{
    display:"flex",
    gap:"40px",
    background:"white",
    padding:"30px",
    borderRadius:"20px",
    boxShadow:"0 4px 20px rgba(0,0,0,0.1)",
    maxWidth:"1000px",
    width:"100%",
    flexWrap:"wrap"
  },

  image:{
    width:"350px",
    borderRadius:"15px",
    objectFit:"cover"
  },

  details:{
    flex:1
  },

  price:{
    fontSize:"28px",
    color:"#2563eb",
    margin:"20px 0",
    fontWeight:"bold"
  },

  description:{
    lineHeight:"1.7",
    color:"#444",
    marginBottom:"30px"
  },

  button:{
    padding:"14px 28px",
    color:"white",
    borderRadius:"10px",
    cursor:"pointer",
    fontSize:"16px"
  },

  loading:{
    padding:"40px",
    textAlign:"center"
  }
}

export default ProductDetails;