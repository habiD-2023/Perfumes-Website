function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">THE ART OF FRAGRANCE</p>

        <h1>
          Discover Your
          <br />
          Signature Scent
        </h1>

        <p className="hero-description">
          Explore a world of captivating fragrances crafted to express your
          personality and leave a lasting impression.
        </p>

        <a href="/products" className="hero-button">
          Shop Collection
        </a>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=900"
          alt="Elegant perfume bottle"
        />
      </div>
    </section>
  );
}

export default Hero;
