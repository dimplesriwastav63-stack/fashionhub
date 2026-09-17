import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShop();

  if (cart.length === 0) {
    return (
      <section className="empty-page">
        <h1>Your Cart is Empty</h1>
        <p>Add some products to your cart.</p>
        <Link to="/products" className="btn">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="page-heading">
        <p>YOUR SHOPPING BAG</p>
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-layout">
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div className="quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>
              </div>

              <div>
                <strong>
                  ₹{item.price * item.quantity}
                </strong>

                <button
                  className="remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{cartTotal}</strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>FREE</strong>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <strong>₹{cartTotal}</strong>
          </div>

          <Link to="/checkout" className="btn full">
            Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default Cart;