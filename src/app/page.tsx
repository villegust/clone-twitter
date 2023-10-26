import React from "react";
import Link from "next/link";

import { POST_DATA } from "../../data";

import Home from "./home/page";

export default function Page() {
  return (
    <>
      <Home POST_DATA={POST_DATA} />
    </>
  );
}
