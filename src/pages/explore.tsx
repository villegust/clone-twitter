import React from "react";

import { POST_DATA } from "../../data";
import { TREND_DATA } from "../../data";

import Sidebar from "@/components/layout/Sidebar";
import Search from "@/components/headercomps/search";
import Accounts from "@/components/trendcomps/recomendedAccounts";

import Header from "@/components/Header";
import YourTrends from "@/components/explorecomps/yourTrends";

export default function Explore() {
  return (
    <>
      <Header showBackArrow label="Explore" />
      <YourTrends TREND_DATA={TREND_DATA} />
    </>
    // <main className="main">
    //   <Sidebar />
    //   <div className="home">
    //     <Search name={"Explore"} />
    //     <YourTrends TREND_DATA={TREND_DATA} />
    //   </div>
    //   <div className="trends">
    //     <Accounts POST_DATA={POST_DATA} />
    //   </div>
    // </main>
  );
}
