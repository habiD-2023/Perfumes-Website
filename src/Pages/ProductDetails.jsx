import { useParams, Link } from "react-router-dom";
import products from "../Data/products.js";

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div>
        <h2>Perfume not found</h2>
        <Link to="/products">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />

      <div className="product-details-info">
        <p>WK PERFUMES COLLECTION</p>

        <h1>{product.name}</h1>

        <h2>${product.price.toFixed(2)}</h2>

        <p>{product.description}</p>

        <Link to="/products">← Back to Shop</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
