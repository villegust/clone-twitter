import React from "react";
import Head from "next/head";

import Header from "@/components/Header";
import MessageBox from "@/components/messagecomps/MessageBox";

export default function Notifications() {
  return (
    <>
      <Head>
        <title>Notifications / X</title>
      </Head>
      <Header label="Notifications" />
      <MessageBox />
    </>
  );
}
