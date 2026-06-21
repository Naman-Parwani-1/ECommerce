import "./TopHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faHeart,
  faBagShopping
} from "@fortawesome/free-solid-svg-icons";

function TopHeader() {
  return (
    <div className="top-header">

      <div className="search-area">

        <div className="search-box">
          <input
            type="text"
            placeholder=""
          />

          <FontAwesomeIcon
            icon={faSearch}
          />
        </div>

      </div>

      <div className="logo-area">
        <a href="/">
          <img
            src="/logos/logo.jpg"
            alt="Logo"
          />
        </a>
      </div>

      <div className="header-icons">

        <FontAwesomeIcon icon={faUser} />

        <FontAwesomeIcon icon={faHeart} />

        <div className="cart-icon">
          <FontAwesomeIcon icon={faBagShopping} />
          <span>0</span>
        </div>

      </div>

    </div>
  );
}

export default TopHeader;