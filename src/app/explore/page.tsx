import React from "react";

import { POST_DATA } from "../../../data";
import { TREND_DATA } from "../../../data";

import Sidebar from "@/components/sidebar";
import Search from "@/components/headercomps/search";
import YourTrends from "@/components/explorecomps/yourTrends";
import Accounts from "@/components/trendcomps/recomendedAccounts";

export default function Page() {
  return (
    <main className="main">
      <Sidebar />
      <Search name={"Explore"} />
      <div className="home">
        <YourTrends TREND_DATA={TREND_DATA} />
      </div>
      <div className="trends">
        <Accounts POST_DATA={POST_DATA} />
      </div>
    </main>
  );
}
