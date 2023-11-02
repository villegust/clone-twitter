"use client";

import React, { useState, useEffect } from "react";

import { POST_DATA } from "../../data";
import { TREND_DATA } from "../../data";

import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import NewPost from "@/components/newPost";
import Post from "@/components/post";

import Search from "@/components/headercomps/search";
import Subscribe from "@/components/trendcomps/subscribe";
import Accounts from "@/components/trendcomps/recomendedAccounts";
import Trends from "@/components/trends";

import MessageBox from "@/components/messagecomps/message-box";

export default function Page() {
  return (
    <main className="main">
      <Sidebar />
      <div className="home">
        <Header name={""} POST_DATA={POST_DATA} />
        <NewPost />
        <Post POST_DATA={POST_DATA} />
      </div>
      <div className="trends">
        <div className="search-header">
          <div className="search-container">
            <Search />
          </div>
        </div>
        <Subscribe />
        <Trends TREND_DATA={TREND_DATA} />
        <Accounts POST_DATA={POST_DATA} />
      </div>

      <MessageBox />
    </main>
  );
}
