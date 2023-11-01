"use client";

import React, { useState } from "react";

import Search from "./headercomps/search";
import FyOrFollow from "./headercomps/fyOrFollow";
import Notification from "./notification";

import IsMobile from "./isMobile/isMobile";

export default function Header({ name }: any) {
  const isMobile: boolean = IsMobile();

  return (
    <>
      <div className="header">
        {name === "" ? (
          <FyOrFollow name={name} />
        ) : (
          <Notification name={name} />
        )}
      </div>
      {/* {!isMobile ? (
        <div className="search-header">
          <div className="search-container">
            <Search />
          </div>
        </div>
      ) : (
        ""
      )} */}
    </>
  );
}
