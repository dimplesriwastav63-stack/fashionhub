import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Wishlist() {
  const {
    wishlist,
    addToCart,
    toggleWishlist,
  } = useShop();

  if (wishlist.length === 0) {
    return (
      <section className="empty-page">
        <h1>Your Wishlist is Empty</h1>
        <p>Save products you love here.</p>

        <Link to="/products" className="btn">
          Explore Products
        </Link>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="page-heading">
        <p>YOUR FAVOURITES</p>
        <h1>Wishlist</h1>
      </div>

      <div className="product-grid">
        {wishlist.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-wrap">
              <img src={product.image} alt={product.name} />

              <button
                className="heart"
                onClick={() => toggleWishlist(product)}
              >
                ♥
              </button>
            </div>

            <div className="product-info">
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <strong>₹{product.price}</strong>

              <button
                className="btn full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wishlist;