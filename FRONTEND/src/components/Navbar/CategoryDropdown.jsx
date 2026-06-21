import "./CategoryDropdown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBottleDroplet,
  faWheatAwn,
  faCubes,
  faMortarPestle,
  faShieldHeart,
  faBowlFood,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faBottleDroplet,
  faWheatAwn,
  faCubes,
  faMortarPestle,
  faShieldHeart,
  faBowlFood,
  faSeedling,
};

function CategoryDropdown({ categories = [] }) {
  return (
    <div className="category-dropdown">

      <div className="category-grid">

        {categories.map((item) => (

          <a
            key={item.id}
            href={item.link}
            className="category-item"
          >

            <FontAwesomeIcon
              icon={iconMap[item.icon]}
              className="category-icon"
            />

            <span className="category-title">
              {item.name}
            </span>

          </a>

        ))}

      </div>

      <button className="category-btn">
        SHOP ALL
      </button>

    </div>
  );
}

export default CategoryDropdown;