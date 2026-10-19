import products from "../Data/products.js";
import ProductCard from "./ProductCard.jsx";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="section-heading">
        <p className="section-subtitle">OUR COLLECTION</p>
        <h2>Featured Fragrances</h2>
        <p>Discover fragrances that make every moment memorable.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="view-all">
        <a href="/products">Explore All Perfumes</a>
      </div>
    </section>
  );
}

export default FeaturedProducts;
