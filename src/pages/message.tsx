import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import MessageInbox from "@/components/MessageInbox";

export default function Message({ messageUser }: any) {
  return (
    <>
      <Head>
        <title>Messages / X</title>
      </Head>
      <Header showBackArrow label="Messages" />
      <MessageInbox messageUser={messageUser} />
    </>
  );
}
