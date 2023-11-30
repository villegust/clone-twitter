import React from "react";
import Head from "next/head";
import Header from "@/components/Header";

export default function Message() {
  return (
    <>
      <Head>
        <title>Messages / X</title>
      </Head>
      <Header label="Messages" />
    </>
  );
}
