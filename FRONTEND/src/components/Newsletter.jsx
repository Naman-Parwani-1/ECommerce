function Newsletter({ newsletter }) {
  return (
    <section className="bg-success text-white py-5">

      <div className="container text-center">

        <h2>
          {newsletter.title}
        </h2>

        <p>
          {newsletter.subtitle}
        </p>

        <div className="row justify-content-center">

          <div className="col-md-6">

            <div className="input-group">

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />

              <button className="btn btn-dark">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;