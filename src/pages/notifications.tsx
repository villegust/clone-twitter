import React from "react";
import Head from "next/head";

import Header from "@/components/Header";
import MessageBox from "@/components/messagecomps/message-box";

import { POST_DATA } from "../../data";

export default function Notifications() {
  return (
    <>
      <Head>
        <title>Notifications / X</title>
      </Head>
      <Header showBackArrow label="Notifications" />
      <MessageBox />
    </>
  );
}
