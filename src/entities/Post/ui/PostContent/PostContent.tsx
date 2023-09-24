import React from "react";
import { IPost } from "../..";

interface PostContentProps {
  post: IPost;
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <>
      <h1>
        <span>{post.id}</span>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </>
  );
}
