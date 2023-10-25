import React from "react";

import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <main className="main">
      <Sidebar />
      <Feed />
    </main>
  );
}
