import React, { useState, useEffect } from "react";
import { POST_DATA } from "../../data";
import { TREND_DATA } from "../../data";
import Sidebar from "@/components/layout/Sidebar";
import FollowBar from "@/components/layout/FollowBar";
import WriteMessage from "@/components/messagecomps/writeMessage";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pageName, setPageName] = useState<string>("");

  useEffect(() => {
    // Load pageName from local storage on the client side during component mount
    const storedPageName = localStorage.getItem("pageName");
    if (storedPageName) {
      setPageName(storedPageName);
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever pageName changes
    localStorage.setItem("pageName", pageName);
  }, [pageName]);

  return (
    <div className="main">
      <div
        className={
          pageName === "message" ? "grid-layout-message" : "grid-layout "
        }
      >
        <Sidebar setPageName={setPageName} />
        <div className="main-content-borders">{children}</div>

        {pageName === "message" ? (
          ""
        ) : (
          // <WriteMessage />
          <FollowBar
            POST_DATA={POST_DATA}
            TREND_DATA={TREND_DATA}
            pageName={pageName}
          />
        )}
      </div>
    </div>
  );
};

export default Layout;
