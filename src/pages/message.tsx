import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import MessageInbox from "@/oldStuff/MessageInbox";

export default function Message({ messageUser }: any) {
  return (
    <>
      <Head>
        <title>Messages / X</title>
      </Head>
      <Header label="Messages" />
      <MessageInbox messageUser={messageUser} />
    </>
  );
}
