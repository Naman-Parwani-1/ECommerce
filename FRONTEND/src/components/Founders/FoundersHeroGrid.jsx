import "./FoundersHeroGrid.css";

function FoundersHeroGrid({ hero }) {

  if (!hero?.cards?.length) return null;

  const largeCard = hero.cards.find(
    card => card.size === "large"
  );

  const smallCards = hero.cards.filter(
    card => card.size === "small"
  );

  return (
    <section className="founders-hero-grid">

      <div className="hero-main-card">

        <img
          src={largeCard.image}
          alt={largeCard.title}
        />

        <h2>
          {largeCard.title}
        </h2>

      </div>

      <div className="hero-side-cards">

        {smallCards.map((card) => (
          <div
            key={card.id}
            className="hero-side-card"
          >

            <img
              src={card.image}
              alt={card.title}
            />

            <h3>
              {card.title}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FoundersHeroGrid;