"use client";

import React, { useState } from "react";
import NewPost from "./NewPost";

const Feed = () => {
  const [fyOrFollow, setFyOrFollow] = useState("For You");
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="home__btn">
        <button
          className={fyOrFollow === "For You" ? "active" : ""}
          onClick={(e) => {
            setFyOrFollow("For You");
          }}
        >
          For You
        </button>
        <button
          className={fyOrFollow === "Following" ? "active" : ""}
          onClick={(e) => {
            setFyOrFollow("Following");
          }}
        >
          Following
        </button>
      </div>
      <NewPost />
    </div>
  );
};

export default Feed;
