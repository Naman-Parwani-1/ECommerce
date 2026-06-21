import "./FarmLifeDropdown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUsers,
  faNewspaper,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faUsers,
  faNewspaper,
  faPeopleGroup,
};

function FarmLifeDropdown({ farmLife = [] }) {
  return (
    <div className="farm-dropdown">

      {farmLife.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className="farm-item"
        >
          <FontAwesomeIcon
            icon={iconMap[item.icon]}
            className="farm-icon"
          />

          <span>{item.title}</span>
        </a>
      ))}

    </div>
  );
}

export default FarmLifeDropdown;