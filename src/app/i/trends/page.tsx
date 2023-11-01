import React from "react";

import { POST_DATA } from "../../../../data";
import { TREND_DATA } from "../../../../data";

import Sidebar from "@/components/sidebar";
import Search from "@/components/headercomps/search";
import AllTrends from "@/components/i/trends";
import Accounts from "@/components/trendcomps/recomendedAccounts";

export default function Page() {
  return (
    <main className="main">
      <Sidebar />
      <div className="home">
        <AllTrends TREND_DATA={TREND_DATA} />
      </div>
      <div className="trends">
        <Accounts POST_DATA={POST_DATA} />
      </div>
    </main>
  );
}
