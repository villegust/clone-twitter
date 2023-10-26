"use client";

import React, { useState } from "react";

interface Notifications {
  name: string;
}

export default function Notification({ name }: Notifications) {
  const [avm, setAvm] = useState("All");

  return (
    <div className="home">
      <h1>{name}</h1>
      <div className="home__btn">
        <button
          className={avm === "All" ? "noti-active" : ""}
          onClick={(e) => {
            setAvm("All");
          }}
        >
          <p className={avm === "All" ? "" : "inactive"}>All</p>
        </button>

        <button
          className={avm === "Verified" ? "noti-active" : ""}
          onClick={(e) => {
            setAvm("Verified");
          }}
        >
          <p className={avm === "Verified" ? "" : "inactive"}>Verified</p>
        </button>

        <button
          className={avm === "Mentioned" ? "noti-active" : ""}
          onClick={(e) => {
            setAvm("Mentioned");
          }}
        >
          <p className={avm === "Mentioned" ? "" : "inactive"}>Mentioned</p>
        </button>
      </div>
    </div>
  );
}
