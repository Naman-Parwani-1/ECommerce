import "./CollectionControls.css";

import { Funnel, ArrowUpDown } from "lucide-react";

function CollectionControls({
  totalProducts = 87,
  onFilterClick,
  onSortClick,
}) {
  return (
    <section className="collection-controls">

      <button
        className="control-btn"
        onClick={onFilterClick}
      >
        <Funnel size={18} />

        <span>Filters</span>
      </button>

      <div className="product-count">
        {totalProducts} products
      </div>

      <button
        className="control-btn"
        onClick={onSortClick}
      >
        <ArrowUpDown size={18} />

        <span>Sort</span>
      </button>

    </section>
  );
}

export default CollectionControls;