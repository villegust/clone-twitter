"use client";

import React, { useState, useEffect } from "react";

import { POST_DATA } from "../../data";
import { TREND_DATA } from "../../data";

import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import NewPost from "@/components/newPost";
import Post from "@/components/post";

import Subscribe from "@/components/trendcomps/subscribe";
import Accounts from "@/components/trendcomps/recomendedAccounts";
import Trends from "@/components/trends";

import IsMobile from "@/components/isMobile/isMobile";

export default function Page() {
  const isMobile: boolean = IsMobile();
  return (
    <main className="main">
      {!isMobile ? (
        <>
          <Header name={""} POST_DATA={POST_DATA} />
          <Sidebar />
          <div className="home">
            <NewPost />
            <Post POST_DATA={POST_DATA} />
          </div>
          <div className="trends">
            <Subscribe />
            <Trends TREND_DATA={TREND_DATA} />
            <Accounts POST_DATA={POST_DATA} />
          </div>
        </>
      ) : (
        <>
          <Header name={""} POST_DATA={POST_DATA} />
          <Sidebar />
          <div className="home">
            <NewPost />
            <Post POST_DATA={POST_DATA} />
          </div>
        </>
      )}
    </main>
  );
}
