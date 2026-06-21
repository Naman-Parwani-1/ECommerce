import "./CategoryShortcutBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSun,
  faGift,
  faBox,
  faTag,
  faJar
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  sun: faSun,
  gift: faGift,
  box: faBox,
  tag: faTag,
  jar: faJar
};

function CategoryShortcutBar({
  items = []
}) {
  return (
    <div className="shortcut-wrapper">

      <div className="shortcut-container">

        {items.map((item) => (
          <div
            key={item.id}
            className="shortcut-item"
          >
            <div
              className={`shortcut-circle ${item.color}`}
            >
              <FontAwesomeIcon
                icon={iconMap[item.icon]}
              />
            </div>

            <span>
              {item.title}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default CategoryShortcutBar;