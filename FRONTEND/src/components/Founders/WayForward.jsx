import "./WayForward.css";

import {
  Leaf,
  Users,
  Search,
} from "lucide-react";

function WayForward({
  data,
}) {
  if (!data) return null;

  const getIcon = (icon) => {
    switch (icon) {
      case "leaf":
        return <Leaf size={60} />;

      case "users":
        return <Users size={60} />;

      case "search":
        return <Search size={60} />;

      default:
        return null;
    }
  };

  return (
    <section className="way-forward">

      <h2 className="way-title">
        {data.title}
      </h2>

      <div className="way-line" />

      <div className="way-container">

        <div className="way-cards">

          {data.cards.map((card, index) => (
            <div
              key={index}
              className="way-card"
            >

              <div className="way-icon">
                {getIcon(card.icon)}
              </div>

              <h3>
                {card.title}
              </h3>

              <p>
                {card.text}
              </p>

            </div>
          ))}

        </div>

        <p className="way-description">
          {data.description}
        </p>

      </div>

    </section>
  );
}

export default WayForward;