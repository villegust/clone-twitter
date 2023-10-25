"use client";

import React from "react";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import NewPost from "../components/NewPost";

export default function Home() {
  const [fyOrFollow, setFyOrFollow] = useState("For You");

  console.log(fyOrFollow);

  return (
    <main className="main">
      <div className="main-content">
        <Sidebar />
        <div className="main-content__feed">
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
          </div>
          <NewPost />
        </div>
      </div>
    </main>
  );
}
