function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        WK <span>PERFUMES</span>
      </a>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Shop</a>
        <a href="/#about">About</a>
      </nav>

      <div className="nav-cart">
        <span>♡</span>
      </div>
    </header>
  );
}

export default Navbar;
