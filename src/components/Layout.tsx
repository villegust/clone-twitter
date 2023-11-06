import React, { useState } from "react";

import { POST_DATA } from "../../data";
import { TREND_DATA } from "../../data";

import Sidebar from "@/components/layout/Sidebar";
import FollowBar from "@/components/layout/FollowBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pageName, setPageName] = useState<string>("");
  return (
    <div className="main">
      <div className="grid-layout">
        <Sidebar setPageName={setPageName} />
        <div className="grid-layout__borders">{children}</div>
        <FollowBar
          POST_DATA={POST_DATA}
          TREND_DATA={TREND_DATA}
          pageName={pageName}
        />
      </div>
    </div>
  );
};

export default Layout;
