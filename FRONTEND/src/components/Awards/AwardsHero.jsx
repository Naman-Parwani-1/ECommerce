import "./AwardsHero.css";

function AwardsHero({ hero }) {
    if (!hero) return null;

    return (
        <section className="awards-hero">

            <div className="hero-background-text">
                {hero.backgroundText}
            </div>

            <div className="hero-content">

                <div className="hero-image">
                    <img
                        src={hero.image}
                        alt={hero.title}
                    />
                </div>

                <div className="hero-text">

                    <h1>{hero.title}</h1>

                    <p className="hero-intro">
                        {hero.intro}
                    </p>

                    <p className="hero-description">
                        {hero.description}
                    </p>

                    <p className="hero-contact">
                        {hero.contactText}
                    </p>

                    <a href={`mailto:${hero.email}`}>
                        {hero.email}
                    </a>

                </div>

            </div>

            <div className="hero-wave"></div>

        </section>
    );
}

export default AwardsHero;