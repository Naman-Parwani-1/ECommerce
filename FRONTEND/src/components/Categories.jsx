import "./Categories.css";

function Categories({ categories }) {
  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Shop By Category
        </h2>

        <p className="text-muted">
          Discover our farm fresh products
        </p>
      </div>

      <div className="row g-4">

        {categories.map((category) => (
          <div
            key={category.id}
            className="col-lg-4 col-md-6"
          >
            <div className="card category-card shadow-sm">

              <img
                src={category.image}
                alt={category.name}
                className="card-img-top"
              />

              <div className="card-body text-center">
                <h5 className="category-title">
                  {category.name}
                </h5>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;