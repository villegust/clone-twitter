import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Form from "@/components/Form";
import PostFeed from "@/components/posts/PostFeed";
import MessageBox from "@/components/messagecomps/MessageBox";

import { POST_DATA } from "../../data";

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
      <MessageBox setMessageUser={setMessageUser} />
    </>
  );
}
