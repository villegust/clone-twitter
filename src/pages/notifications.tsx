import React from "react";
import Header from "@/components/Header";
import MessageBox from "@/components/messagecomps/message-box";

import { POST_DATA } from "../../data";

export default function Notifications() {
  return (
    <>
      <Header showBackArrow label="Notifications" />
      <MessageBox />
    </>
  );
}
