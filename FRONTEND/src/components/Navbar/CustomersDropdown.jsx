import "./CustomersDropdown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTruck,
  faPhone,
  faRotateLeft,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faTruck,
  faPhone,
  faRotateLeft,
  faBox,
};

function CustomersDropdown({ customers = [] }) {
  return (
    <div className="customers-dropdown">

      {customers.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className="customer-item"
        >
          <FontAwesomeIcon
            icon={iconMap[item.icon]}
            className="customer-icon"
          />

          <span>{item.title}</span>
        </a>
      ))}

    </div>
  );
}

export default CustomersDropdown;