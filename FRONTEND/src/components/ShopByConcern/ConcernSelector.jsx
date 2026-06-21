import "./ConcernSelector.css";

function ConcernSelector({
  concerns = [],
  activeConcern,
  setActiveConcern,
}) {
  return (
    <section className="concern-selector">

      <div className="breadcrumb">
        Home &gt; Shop by concern
      </div>

      <div className="concern-items">

        {concerns.map((item) => (
          <div
            key={item.id}
            className={`concern-item ${
              activeConcern === item.name
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveConcern(item.name)
            }
          >

            <div className="item-wrapper">

              <img
                src={item.image}
                alt={item.name}
              />

              {activeConcern === item.name && (
                <div className="selected-tick">
                  ✓
                </div>
              )}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ConcernSelector;