import React from "react";
import Head from "next/head";

import { POST_DATA } from "../../data";
import { TREND_DATA } from "../../data";

import Header from "@/components/Header";
import YourTrends from "@/oldStuff/explorecomps/YourTrends";

export default function Explore() {
  return (
    <>
      <Head>
        <title>Explore / X</title>
      </Head>
      <Header label="Explore" />
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
