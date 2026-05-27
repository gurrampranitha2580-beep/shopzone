import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import "../styles/navbar.css";

function Navbar(){

  const { cartItems } = useContext(CartContext);

  return(
    <nav className="navbar">

      <h2 className="logo">
        ShopZone
      </h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/login">Login</Link>

        
        <Link to="/cart">
          Cart {cartItems.length > 0 && `(${cartItems.length})`}
        </Link>
        <Link to="/checkout">
  Checkout
</Link>

      </div>

    </nav>
  )
}

export default Navbar;