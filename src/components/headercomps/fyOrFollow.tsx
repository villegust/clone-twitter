import React, { useState } from "react";

const FyOrFollow = ({ name }: any) => {
  const [fyOrFollow, setFyOrFollow] = useState("For You");

  return (
    <div className="header__feeds">
      <h1>{name}</h1>
      <div className="header__feeds__btn">
        <button
          className={fyOrFollow === "For You" ? "active" : ""}
          onClick={(e) => {
            setFyOrFollow("For You");
          }}
        >
          <p className={fyOrFollow === "For You" ? "" : "inactive"}>For You</p>
        </button>
        <button
          className={fyOrFollow === "Following" ? "active" : ""}
          onClick={(e) => {
            setFyOrFollow("Following");
          }}
        >
          <p className={fyOrFollow === "For You" ? "inactive" : ""}>
            Following
          </p>
        </button>
      </div>
    </div>
  );
};

export default FyOrFollow;
