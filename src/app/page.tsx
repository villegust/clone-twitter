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

export default function Page() {
  return (
    <main className="main">
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
    </main>
  );
}
