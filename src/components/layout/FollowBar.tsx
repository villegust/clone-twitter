import React from "react";
import Search from "@/oldStuff/headercomps/Search";
import Subscribe from "@/oldStuff/trendcomps/Subscribe";
import Accounts from "@/oldStuff/trendcomps/RecomendedAccounts";
import Trends from "@/oldStuff/trendcomps/Trends";

function FollowBar({ POST_DATA, TREND_DATA, pageName }: any) {
  return (
    <div>
      {pageName === "explore" ? (
        <Accounts POST_DATA={POST_DATA} />
      ) : pageName === "message" ? (
        ""
      ) : (
        <>
          <Search />
          <Subscribe />
          <Accounts POST_DATA={POST_DATA} />
          <Trends TREND_DATA={TREND_DATA} />
        </>
      )}
    </div>
  );
}

export default FollowBar;
