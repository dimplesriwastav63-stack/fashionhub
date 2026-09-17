import { Link } from "react-router-dom";
import { useState } from "react";
import {useNavigate}from
"react-router-dom";
import { useShop } from "../context/ShopContext";

function Products() {
  const navigate=useNavigate();
  const {
    products,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useShop();

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <section className="section">
      {/* Page Heading */}
      <div className="page-heading">
        <p>EXPLORE OUR COLLECTION</p>
        <h1>Shop All Products</h1>
      </div>

      {/* Category Filters */}
      <div className="filters">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "filter active"
                : "filter"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            
            {/* Product Image */}
            <div className="image-wrap">
              <img
                src={product.image}
                alt={product.name}
              />

              {/* Wishlist */}
              <button
                className="heart"
                onClick={() =>
                  toggleWishlist(product)
                }
              >
                {isInWishlist(product.id)
                  ? "♥"
                  : "♡"}
              </button>
            </div>

            {/* Product Information */}
            <div className="product-info">
              <span>{product.category}</span>

              <h3>{product.name}</h3>

              <strong>₹{product.price}</strong>
               
              {/* View Product */}
              <Link
                to={`/products/${product.id}`}
                className="view-btn"
              >
                👀 View Product
              </Link>

              {/* Add To Cart */}
              <button
                className="btn full"
                onClick={() =>
                  addToCart(product)
                }
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;