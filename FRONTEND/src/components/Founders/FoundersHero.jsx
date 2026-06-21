import "./FoundersHero.css";

function FoundersHero({
  hero,
}) {
  if (!hero) return null;

  return (
    <section className="founders-hero">

      <img
        src={hero.image}
        alt={hero.title}
      />

      <div className="hero-overlay">

        <h1>
          {hero.title}
        </h1>

      </div>

    </section>
  );
}

export default FoundersHero;