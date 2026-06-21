function ShopByConcern({ concerns }) {
  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Shop By Concern
        </h2>

        <p className="text-muted">
          Products curated for your health needs
        </p>
      </div>

      <div className="row g-4">

        {concerns.map((item) => (
          <div
            key={item.id}
            className="col-lg-3 col-md-6"
          >
            <div className="card border-0 shadow-sm">

              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
              />

              <div className="card-body text-center">
                <h5>{item.title}</h5>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default ShopByConcern;