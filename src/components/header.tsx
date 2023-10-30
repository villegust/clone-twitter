"use client";

import React, { useState } from "react";

import Search from "./headercomps/search";
import FyOrFollow from "./headercomps/fyOrFollow";
import Notification from "./notification";

export default function Header({ name }: any) {
  return (
    <>
      <div className="header">
        {name === "Home" ? (
          <FyOrFollow name={name} />
        ) : (
          <Notification name={name} />
        )}
      </div>

      <div className="search-header">
        <div className="search-container">
          <Search />
        </div>
      </div>
    </>
  );
}
