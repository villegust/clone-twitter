import React from "react";

import { POST_DATA } from "../../data";

import Sidebar from "../components/sidebar";
import Feed from "../components/feed";

export default function Page() {
  return (
    <main className="main">
      <Sidebar />
      <Feed name={"Home"} POST_DATA={POST_DATA} />
    </main>
  );
}
