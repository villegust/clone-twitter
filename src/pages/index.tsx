import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Form from "@/components/Form";

import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home / X</title>
      </Head>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  );
}
