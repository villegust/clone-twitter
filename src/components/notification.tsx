"use client";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

interface Notifications {
  name: string;
}

export default function Notification({ name }: Notifications) {
  const [avm, setAvm] = useState("All");

  return (
    <div className="header__feeds">
      <div className="title">
        <h1 id="noti-h1">{name}</h1>
        <div className="icon">
          <FontAwesomeIcon icon={faGear} size="xl" />
        </div>
      </div>

      <div className="header__feeds__btn">
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
