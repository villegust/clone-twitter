import React from "react";

import { POST_DATA } from "../../../data";
import { TREND_DATA } from "../../../data";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

import Search from "@/components/headercomps/search";
import Subscribe from "@/components/trendcomps/subscribe";
import Trends from "@/components/trends";
import Accounts from "@/components/trendcomps/recomendedAccounts";

export default function Page() {
  return (
    <main className="main">
      <Sidebar />
      <div className="home">
        <Header name={"Notifications"} />
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
    </main>
  );
}
