import "./ConcernCategories.css";

function ConcernCategories({
  concerns = [],
}) {
  return (
    <section className="concern-section">
      <div className="concern-grid">

        {concerns.map((item) => (
          <div
            key={item.id}
            className="concern-card"
          >
            <img
              src={item.icon}
              alt={item.name}
            />

            <span>
              {item.name}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default ConcernCategories;