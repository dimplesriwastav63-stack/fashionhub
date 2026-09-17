import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Checkout() {
  const { cart, cartTotal } = useShop();

  if (cart.length === 0) {
    return (
      <section className="empty-page">
        <h1>No items to checkout</h1>
        <Link to="/products" className="btn">
          Shop Now
        </Link>
      </section>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully! Thank you for shopping with FashionHub.");
  };

  return (
    <section className="section">
      <div className="page-heading">
        <p>SECURE CHECKOUT</p>
        <h1>Checkout</h1>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <input
            type="text"
            placeholder="Address"
            required
          />

          <div className="two-inputs">
            <input
              type="text"
              placeholder="City"
              required
            />

            <input
              type="text"
              placeholder="PIN Code"
              required
            />
          </div>

          <h2>Payment Method</h2>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              defaultChecked
            />
            Cash on Delivery
          </label>

          <label className="payment-option">
            <input type="radio" name="payment" />
            UPI / Online Payment
          </label>

          <button className="btn full" type="submit">
            Place Order
          </button>
        </form>

        <aside className="summary">
          <h2>Your Order</h2>

          {cart.map((item) => (
            <div className="summary-row" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <strong>
                ₹{item.price * item.quantity}
              </strong>
            </div>
          ))}

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <strong>₹{cartTotal}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;