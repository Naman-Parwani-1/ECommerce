function WhyChooseUs({ features }) {
  return (
    <section className="bg-light py-5">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Why Choose Us
          </h2>
        </div>

        <div className="row">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="col-lg-3 col-md-6 mb-4"
            >
              <div className="text-center">

                <h4>
                  {feature.title}
                </h4>

                <p>
                  {feature.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;