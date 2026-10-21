import FeaturedProducts from "../Components/FeaturedProducts";

function Products() {
  return (
    <div>
      <section className="products-page">
        <h1>Our Perfume Collection</h1>
        <p>Discover a fragrance that matches your personality.</p>

        <FeaturedProducts />
      </section>
    </div>
  );
}

export default Products;
