import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Home() {
  const { products, addToCart } = useShop();

  return (
    <div>
      <section className="hero">
        <div>
          <p className="hero-small">WELCOME TO</p>
          <h1>FashionHub</h1>
          <p>
            Discover trendy fashion for every style and every occasion.
          </p>

          <Link to="/products" className="btn">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Featured Products</h2>
          <Link to="/products">View All →</Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 6).map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

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
    </div>
  );
}

export default Home;