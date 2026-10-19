function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <span className="product-price">${product.price.toFixed(2)}</span>

          <a href={`/products/${product.slug}`} className="product-button">
            View Details
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
