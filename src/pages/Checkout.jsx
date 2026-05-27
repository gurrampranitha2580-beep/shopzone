import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";

function Checkout(){

  const { cartItems } = useContext(CartContext);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customer, setCustomer] = useState({
    name:"",
    email:"",
    address:"",
    payment:""
  });

  const totalPrice = cartItems.reduce((total,item) => {
    return total + item.price * item.quantity
  },0)

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  }

  const placeOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  }

  if(orderPlaced){
    return(
      <div className="checkout-page">
        <div className="checkout-box success-box">
          <h1>Order placed successfully</h1>

          <p className="saved-text">
            Customer details saved for this demo order.
          </p>

          <div className="saved-details">
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Address:</strong> {customer.address}</p>
            <p><strong>Payment Method:</strong> {customer.payment}</p>
            <p><strong>Order Total:</strong> ${totalPrice.toFixed(2)}</p>
          </div>

          <p>Thank you for shopping with ShopZone.</p>
        </div>
      </div>
    )
  }

  return(
    <div className="checkout-page">
      <div className="checkout-box">
        <p className="checkout-label">Checkout</p>
        <h1>Delivery Details</h1>

        {
          cartItems.length === 0 ? (
            <p className="empty-checkout">
              Your cart is empty. Please add products before checkout.
            </p>
          ) : (
            <form onSubmit={placeOrder}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={customer.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={customer.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="address"
                placeholder="Delivery Address"
                value={customer.address}
                onChange={handleChange}
                required
              ></textarea>
              <h3 className="payment-heading">Payment Method</h3>
              <div className="payment-options">
                <label>
                    <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    onChange={handleChange}
                    required
                    />
                    Cash on Delivery
                </label>

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="UPI"
                        onChange={handleChange}
                    />
                    UPI
                </label>

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="Card"
                        onChange={handleChange}
                    />
                    Card
                </label>

            </div>

              <h2 className="summary-title">Order Summary</h2>

              {
                cartItems.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>Qty: {item.quantity}</p>
                    </div>

                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </div>
                ))
              }

              <div className="checkout-total">
                <span>Total</span>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>

              <button className="place-order-btn">
                Place Order
              </button>
            </form>
          )
        }
      </div>
    </div>
  )
}

export default Checkout;