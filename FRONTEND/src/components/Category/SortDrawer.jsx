import "./SortDrawer.css";

function SortDrawer({
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

      <div className="sort-drawer">

        <div className="sort-header">
          <h3>Sort By</h3>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="sort-options">

          <button>
            Featured
          </button>

          <button>
            Best Selling
          </button>

          <button>
            Alphabetically A-Z
          </button>

          <button>
            Alphabetically Z-A
          </button>

          <button>
            Price Low to High
          </button>

          <button>
            Price High to Low
          </button>

          <button>
            Newest First
          </button>

        </div>

      </div>
    </>
  );
}

export default SortDrawer;