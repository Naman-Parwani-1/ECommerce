import "./FilterDrawer.css";

function FilterDrawer({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="drawer-overlay"
        onClick={onClose}
      />

      <div className="filter-drawer">

        <div className="drawer-header">

          <h3>Filters</h3>

          <button
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <div className="filter-group">

          <h4>Category</h4>

          <label>
            <input type="checkbox" />
            Ghee
          </label>

          <label>
            <input type="checkbox" />
            Honey
          </label>

          <label>
            <input type="checkbox" />
            Atta
          </label>

          <label>
            <input type="checkbox" />
            Rice
          </label>

        </div>

        <div className="filter-group">

          <h4>Price</h4>

          <label>
            <input type="checkbox" />
            Under ₹1000
          </label>

          <label>
            <input type="checkbox" />
            ₹1000 - ₹3000
          </label>

          <label>
            <input type="checkbox" />
            Above ₹3000
          </label>

        </div>

      </div>
    </>
  );
}

export default FilterDrawer;