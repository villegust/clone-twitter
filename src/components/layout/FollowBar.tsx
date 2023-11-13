import React from "react";
import Search from "@/components/headercomps/Search";
import Subscribe from "@/components/trendcomps/Subscribe";
import Accounts from "@/components/trendcomps/RecomendedAccounts";
import Trends from "@/components/trendcomps/Trends";

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
