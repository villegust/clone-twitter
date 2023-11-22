import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Form from "@/components/Form";

import { POST_DATA } from "../../data";
import PostFeed from "@/components/posts/PostFeed";

export default function Home({
  temporaryUser,
  setTemporaryUser,
  setMessageUser,
}: any) {
  return (
    <>
      <Head>
        <title>Home / X</title>
      </Head>
      <Header label="Home" />
      <Form placeholder="What's happening!" />
      <PostFeed POST_DATA={POST_DATA} />
    </>
  );
}
