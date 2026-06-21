import "./Navbar.css";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faJar,
  faWheatAwn,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import CategoryDropdown from "./CategoryDropdown";
import ConcernDropdown from "./ConcernDropdown";
import FarmLifeDropdown from "./FarmLifeDropdown";
import CustomersDropdown from "./CustomersDropdown";

function Navbar({
  categories = [],
  concerns = [],
  farmLife = [],
  customers = [],
}) {
  const [showCategory, setShowCategory] = useState(false);
  const [showConcern, setShowConcern] = useState(false);
  const [showFarmLife, setShowFarmLife] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);

  return (
    <nav className="main-nav">

      <div className="nav-container">

        <a href="/collections/all">
          <FontAwesomeIcon icon={faJar} />
          <span>GHEE</span>
        </a>

        <a href="/collections/all">
          <FontAwesomeIcon icon={faWheatAwn} />
          <span>ATTA</span>
        </a>

        <div
          className="category-wrapper"
          onMouseEnter={() => setShowCategory(true)}
          onMouseLeave={() => setShowCategory(false)}
        >
          <div className="category-link">
            <span>SHOP BY CATEGORY</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="nav-arrow"
            />
          </div>

          {showCategory && (
            <CategoryDropdown
              categories={categories}
            />
          )}
        </div>

        <a href="#" className="collective-link">
          <span>JOIN</span>

          <span className="collective-badge">
            COLLECTIVE
          </span>
        </a>

        {/* SHOP BY CONCERN */}

        <div
          className="concern-wrapper"
          onMouseEnter={() => setShowConcern(true)}
          onMouseLeave={() => setShowConcern(false)}
        >
          <div className="concern-link">
            <span>SHOP BY CONCERN</span>

            <FontAwesomeIcon
              icon={faChevronDown}
              className="nav-arrow"
            />
          </div>

          {showConcern && (
            <ConcernDropdown
              concerns={concerns}
            />
          )}
        </div>

        <div
          className="farmlife-wrapper"
          onMouseEnter={() => setShowFarmLife(true)}
          onMouseLeave={() => setShowFarmLife(false)}
        >
          <div className="farmlife-link">
            <span>FARM LIFE</span>

            <FontAwesomeIcon
              icon={faChevronDown}
              className="nav-arrow"
            />
          </div>

          {showFarmLife && (
            <FarmLifeDropdown
              farmLife={farmLife}
            />
          )}
        </div>

        <div
          className="customers-wrapper"
          onMouseEnter={() => setShowCustomers(true)}
          onMouseLeave={() => setShowCustomers(false)}
        >
          <div className="customers-link">
            <span>CUSTOMERS</span>

            <FontAwesomeIcon
              icon={faChevronDown}
              className="nav-arrow"
            />
          </div>

          {showCustomers && (
            <CustomersDropdown
              customers={customers}
            />
          )}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;