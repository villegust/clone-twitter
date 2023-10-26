import React from "react";

import Sidebar from "../components/sidebar";
import Notification from "../components/notification";

export default function Page() {
  return (
    <main className="main">
      <Sidebar />
      <Notification name={"Notifications"} />
    </main>
  );
}
