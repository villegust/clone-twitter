import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import MessageInbox from "@/components/MessageInbox";

export default function Message() {
  return (
    <>
      <Head>
        <title>Messages / X</title>
      </Head>
      <Header showBackArrow label="Messages" />
      <MessageInbox />
    </>
  );
}
