import "./MembershipBanner.css";

function MembershipBanner({ membership }) {
  return (
    <section className="membership-section">
      <div className="container-fluid p-0">

        <div className="membership-wrapper">

          <img
            src={membership.image}
            alt="Membership Banner"
            className="membership-image"
          />

          <div className="membership-overlay">

            <h2>{membership.title}</h2>

            <p>{membership.subtitle}</p>

            <button className="btn btn-success btn-lg">
              {membership.buttonText}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MembershipBanner;