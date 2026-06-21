import ProductCard from "./Products/ProductCard";

function FeaturedProducts({ products }) {
  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Featured Products
        </h2>

        <p className="text-muted">
          Our Best Selling Products
        </p>
      </div>

      <div className="row g-4">

        {products.map((product) => (
          <div
            key={product.id}
            className="col-lg-3 col-md-6"
          >
            <ProductCard
              product={product}
            />
          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;