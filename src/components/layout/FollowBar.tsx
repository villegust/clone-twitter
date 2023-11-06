import React from "react";
import Accounts from "@/components/trendcomps/recomendedAccounts";
import Search from "@/components/headercomps/search";

function FollowBar({ POST_DATA, TREND_DATA }: any) {
  return (
    <div>
      <Search />
      <Accounts POST_DATA={POST_DATA} />
    </div>
  );
}

export default FollowBar;
