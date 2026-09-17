import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Navbar() {
  const { cartCount, wishlist } = useShop();

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        FashionHub
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/wishlist">
          Wishlist ({wishlist.length})
        </Link>
        <Link to="/cart">
          Cart ({cartCount})
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Navbar;