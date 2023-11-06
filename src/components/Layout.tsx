import React from "react";

import { POST_DATA } from "../../data";
import { TREND_DATA } from "../../data";

import Sidebar from "@/components/layout/Sidebar";
import FollowBar from "@/components/layout/FollowBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="main">
      <div className="grid-layout">
        <Sidebar />
        <div className="grid-layout__borders">{children}</div>
        <FollowBar POST_DATA={POST_DATA} TREND_DATA={TREND_DATA} />
      </div>
    </div>
    // <main className="main">
    //   <Sidebar />
    //   <div className="home">
    //     <div className="home__borders">{children}</div>
    //   </div>
    //   <FollowBar POST_DATA={POST_DATA} />
    // </main>
  );
};

export default Layout;
