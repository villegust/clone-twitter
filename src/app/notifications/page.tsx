import React from "react";

import { POST_DATA } from "../../../data";
import { TREND_DATA } from "../../../data";

import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

import Subscribe from "@/components/trendcomps/subscribe";
import Trends from "@/components/trends";
import Accounts from "@/components/trendcomps/recomendedAccounts";

export default function Page() {
  return (
    <main className="main">
      <Header name={"Notifications"} />
      <Sidebar />
      <div className="home"></div>
      <div className="trends">
        <Subscribe />
        <Trends TREND_DATA={TREND_DATA} />
        <Accounts POST_DATA={POST_DATA} />
      </div>
    </main>
  );
}
