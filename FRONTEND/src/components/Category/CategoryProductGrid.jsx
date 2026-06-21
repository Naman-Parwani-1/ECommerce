import "./CategoryProductGrid.css";

import ProductCard from "../Products/ProductCard";

function CategoryProductGrid({
products = [],
}) {
return ( <section className="category-product-grid">

  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}

</section>

);
}

export default CategoryProductGrid;
