import React from "react";
import Header from "@/components/Header";
import Form from "@/components/Form";
import PostFeed from "@/components/posts/PostFeed";

import { POST_DATA } from "../../data";

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening!" />
      <PostFeed POST_DATA={POST_DATA} />
    </>
  );
}
