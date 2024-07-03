import PostCard from "@/components/Postcard";
import React from "react";

const SinglePost = () => {
  return (
    <div className="posts-container ">
      <h1
        className="post-title">
        Single Post by Id
      </h1>
      <PostCard maxWidthSize={"100%"} />
    </div>
  );
};

export default SinglePost;
