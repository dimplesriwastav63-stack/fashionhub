import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useShop } from "./context/ShopContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function ProductDetails() {
  const { id } = useParams();

  const {
    products,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useShop();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );

  if (!product) {
    return (
      <section className="empty-page">
        <h1>Product Not Found</h1>

        <Link to="/products" className="btn">
          Back to Shop
        </Link>
      </section>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
      selectedSize,
    });

    alert(
      `${product.name} added to cart!\nColour: ${selectedColor}\nSize: ${selectedSize}`
    );
  };

  return (
    <section className="product-details">
      <div className="details-image">
        <img
          src={
            product.colorImages?.[selectedColor] ||
            product.image
          }
          alt={product.name}
        />
      </div>

      <div className="details-info">
        <p className="category">
          {product.category}
        </p>

        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p className="description">
          Beautiful and comfortable {product.name}.
          Perfect for everyday wear, parties and
          special occasions.
        </p>

        <div className="option-group">
          <h3>Choose Colour</h3>

          <div className="options">
            {product.colors.map((color) => (
              <button
                key={color}
                className={
                  selectedColor === color
                    ? "option selected"
                    : "option"
                }
                onClick={() =>
                  setSelectedColor(color)
                }
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="option-group">
          <h3>Choose Size</h3>

          <div className="options">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={
                  selectedSize === size
                    ? "option selected"
                    : "option"
                }
                onClick={() =>
                  setSelectedSize(size)
                }
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="selected-info">
          <p>
            <strong>Colour:</strong>{" "}
            {selectedColor}
          </p>

          <p>
            <strong>Size:</strong>{" "}
            {selectedSize}
          </p>
        </div>

        <div className="detail-buttons">
          <button
            className="btn"
            onClick={handleAddToCart}
          >
            🛒 Add to Cart
          </button>

          <button
            className="wishlist-btn"
            onClick={() =>
              toggleWishlist(product)
            }
          >
            {isInWishlist(product.id)
              ? "♥ Remove Wishlist"
              : "♡ Add Wishlist"}
          </button>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/admin-login"
            element={<AdminLogin />}
          />

          <Route
            path="/admin"
            element={<AdminDashboard />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;