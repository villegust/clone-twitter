import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <section className="search-section">
      <div className="search-content">
        <div className="search-bar">
          <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          </div>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </section>
  );
};

export default Search;
