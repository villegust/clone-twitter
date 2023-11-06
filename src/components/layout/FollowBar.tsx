import React from "react";
import Search from "@/components/headercomps/search";
import Subscribe from "@/components/trendcomps/subscribe";
import Accounts from "@/components/trendcomps/recomendedAccounts";
import Trends from "@/components/trendcomps/trends";

function FollowBar({ POST_DATA, TREND_DATA, pageName }: any) {
  return (
    <div>
      {pageName === "explore" ? (
        <Accounts POST_DATA={POST_DATA} />
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
