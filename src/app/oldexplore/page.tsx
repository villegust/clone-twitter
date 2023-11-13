import React from "react";

import { POST_DATA } from "../../../data";
import { TREND_DATA } from "../../../data";

import Sidebar from "@/components/layout/Sidebar";
import Search from "@/components/headercomps/Search";
import YourTrends from "@/components/explorecomps/YourTrends";
import Accounts from "@/components/trendcomps/RecomendedAccounts";

export default function Page() {
  return (
    <main className="main">
      <Sidebar />
      <div className="home">
        <Search name={"Explore"} />
        <YourTrends TREND_DATA={TREND_DATA} />
      </div>
      <div className="trends">
        <Accounts POST_DATA={POST_DATA} />
      </div>
    </main>
  );
}
