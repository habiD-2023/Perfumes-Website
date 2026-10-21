import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        WK <span>PERFUMES</span>
      </a>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/#about">About</Link>
      </nav>

      <div className="nav-cart">
        <span>♡</span>
      </div>
    </header>
  );
}

export default Navbar;
