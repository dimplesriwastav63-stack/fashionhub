import { Link } from "react-router-dom";

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/admin-login";
  };

  return (
    <section className="admin-dashboard">
      <div className="admin-header">
        <div>
          <p className="hero-small">FASHIONHUB ADMIN</p>
          <h1>Admin Dashboard</h1>
          <p>
            Welcome, {user?.name || "Admin"} 👋
          </p>
        </div>

        <button
          className="wishlist-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <span>👤</span>
          <h3>Total Users</h3>
          <strong>0</strong>
        </div>

        <div className="admin-stat-card">
          <span>📦</span>
          <h3>Total Products</h3>
          <strong>0</strong>
        </div>

        <div className="admin-stat-card">
          <span>🛒</span>
          <h3>Total Orders</h3>
          <strong>0</strong>
        </div>

        <div className="admin-stat-card">
          <span>💰</span>
          <h3>Total Sales</h3>
          <strong>₹0</strong>
        </div>
      </div>

      <div className="admin-actions">
        <h2>Quick Actions</h2>

        <div className="admin-action-grid">
          <Link to="/admin/products" className="admin-action-card">
            <span>➕</span>
            <h3>Add Product</h3>
            <p>Add a new fashion product</p>
          </Link>

          <Link to="/admin/products" className="admin-action-card">
            <span>📦</span>
            <h3>Manage Products</h3>
            <p>View, edit and delete products</p>
          </Link>

          <Link to="/admin/orders" className="admin-action-card">
            <span>📋</span>
            <h3>Manage Orders</h3>
            <p>View and update customer orders</p>
          </Link>

          <Link to="/admin/users" className="admin-action-card">
            <span>👥</span>
            <h3>Manage Users</h3>
            <p>View registered customers</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;