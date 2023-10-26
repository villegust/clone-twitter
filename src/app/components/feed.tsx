"use client";

import React, { useState } from "react";
import NewPost from "./newPost";
import Post from "./post";

export default function Feed({ name, POST_DATA }: any) {
  const [fyOrFollow, setFyOrFollow] = useState("For You");
  return (
    <div className="home">
      <h1>{name}</h1>
      <div className="home__btn">
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
      <NewPost />
      <Post POST_DATA={POST_DATA} />
    </div>
  );
}
