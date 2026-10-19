import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedProducts from "./Components/FeaturedProducts";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />

      <main>
        <h1>WK Perfumes</h1>
        <p>Discover your signature fragrance.</p>
      </main>
    </div>
  );
}

export default App;
