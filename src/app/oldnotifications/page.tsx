import React from "react";

import { POST_DATA } from "../../../data";
import { TREND_DATA } from "../../../data";

import Sidebar from "@/components/layout/Sidebar";

import Search from "@/components/headercomps/Search";
import Subscribe from "@/components/trendcomps/Subscribe";
import Trends from "@/components/trendcomps/Trends";
import Accounts from "@/components/trendcomps/RecomendedAccounts";

export default function Page() {
  return (
    <main className="main">
      <Sidebar />
      <div className="home"></div>
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
    </main>
  );
}
