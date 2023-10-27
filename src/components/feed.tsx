"use client";

import React, { useState } from "react";
import NewPost from "./newPost";
import Post from "./post";

import Search from "./headercomps/search";

export default function Feed({ name, POST_DATA }: any) {
  const [fyOrFollow, setFyOrFollow] = useState("For You");
  return (
    <>
      <div className="header">
        <div className="header__feeds">
          <h1>{name}</h1>
          <div className="header__feeds__btn">
            <button
              className={fyOrFollow === "For You" ? "active" : ""}
              onClick={(e) => {
                setFyOrFollow("For You");
              }}
            >
              <p className={fyOrFollow === "For You" ? "" : "inactive"}>
                For You
              </p>
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
      </div>

      <div className="search-header">
        <div className="search-container">
          <Search />
        </div>
      </div>

      <div className="home">
        <NewPost />
        <Post POST_DATA={POST_DATA} />
      </div>
    </>
  );
}
