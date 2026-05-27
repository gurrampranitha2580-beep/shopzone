import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

function Cart(){

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total,item) => {
    return total + item.price * item.quantity
  },0)

  return(
    <div className="cart-page">
      <h1 className="cart-heading">Shopping Cart</h1>

      {
        cartItems.length === 0 ? (
          <h2 className="empty-cart">Your cart is empty</h2>
        ) : (
          <div className="cart-container">
            {
              cartItems.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="cart-image"
                  />

                  <div className="cart-details">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>

                    <div className="qty-box">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>

                    <h4>Total: ${(item.price * item.quantity).toFixed(2)}</h4>
                  </div>
                </div>
              ))
            }

            <div className="final-total">
              Grand Total: ${totalPrice.toFixed(2)}
            </div>

            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart;