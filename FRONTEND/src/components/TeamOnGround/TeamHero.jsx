import "./TeamHero.css";

function TeamHero({ hero }) {
  if (!hero) return null;

  return (
    <section className="team-hero">

      <img
        src={hero.image}
        alt={hero.title}
        className="team-hero-image"
      />

      <div className="team-hero-overlay">

        <h1>
          {hero.title}
        </h1>

        <p>{hero.line1}</p>

        <h2>{hero.line2}</h2>

        <p>{hero.line3}</p>

      </div>

    </section>
  );
}

export default TeamHero;