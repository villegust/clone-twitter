import React from "react";

import Sidebar from "../components/sidebar";
import Feed from "../components/feed";

export default function Page({ POST_DATA }: any) {
  return (
    <main className="main">
      <Sidebar />
      <Feed name={"Home"} POST_DATA={POST_DATA} />
    </main>
  );
}
