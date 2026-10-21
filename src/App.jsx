import ProductDetails from "./Pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedProducts from "./Components/FeaturedProducts";
import Products from "./Pages/Products";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />

      <section id="about" className="about-section">
        <p className="about-label">OUR STORY</p>

        <h2>Fragrance That Defines You</h2>

        <p className="about-description">
          At WK Perfumes, we believe fragrance is more than just a scent. It's a
          reflection of your personality, your memories, and your unique style.
          Discover fragrances designed to make every moment unforgettable.
        </p>
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
