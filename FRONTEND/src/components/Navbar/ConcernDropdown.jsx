import "./ConcernDropdown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWeightScale,
  faHeartPulse,
  faSyringe,
  faBacteria,
  faShieldHeart,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faWeightScale,
  faHeartPulse,
  faSyringe,
  faBacteria,
  faShieldHeart,
  faSeedling,
};

function ConcernDropdown({ concerns = [] }) {
  return (
    <div className="concern-dropdown">

      {concerns.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className="concern-item"
        >
          <FontAwesomeIcon
            icon={iconMap[item.icon]}
            className="concern-icon"
          />

          <span>{item.name}</span>
        </a>
      ))}

    </div>
  );
}

export default ConcernDropdown;