import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div
        className={`product-badge ${
          product.badgeColor === "green"
            ? "badge-green"
            : "badge-orange"
        }`}
      >
        {product.badge}
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-content">

        <h5 className="product-title">
          {product.name}
        </h5>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-price">
          ₹{product.price}
        </div>

        <div className="product-rating">
          ⭐ {product.rating} | {product.reviews} Reviews
        </div>

        <select className="product-select">
          {product.variants.map((variant) => (
            <option
              key={variant}
              value={variant}
            >
              {variant}
            </option>
          ))}
        </select>

        <button className="cart-btn">
          ADD TO CART
        </button>

      </div>

    </div>
  );
}

export default ProductCard;