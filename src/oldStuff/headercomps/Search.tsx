import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ label }: any) => {
  return (
    <>
      {label === "Explore" ? (
        <section className="search-section-explore">
          <div className="explore">
            <div className="search-content">
              <div className="search-bar">
                <div className="search-icon">
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                </div>
                <input type="text" placeholder="Search..." />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="search-header">
          <div className="search-container">
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
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
