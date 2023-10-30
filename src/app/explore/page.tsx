import React from "react";

import { POST_DATA } from "../../../data";

import Sidebar from "../../components/sidebar";
import Search from "../../components/headercomps/search";
import Accounts from "../../components/trendcomps/recomendedAccounts";

export default function Page() {
  return (
    <main className="main">
      <Sidebar />
      <Search name={"Explore"} />
      <Accounts POST_DATA={POST_DATA} />
      <div className="home">
        <p>test</p>
      </div>
    </main>
  );
}
