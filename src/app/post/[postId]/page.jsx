import React from "react";
import { longText } from "@/developing/helpers";
import PostCard from "@/components/Postcard";
import PopularPosts from "@/components/PopularPosts";
const SinglePost = () => {
  return (
    <div
      className="mt-6 flex flex-col md:flex-row justify-center gap-6
     align-top "
    >
      <div className="flex-2">
        <h1 className="post-title">Single Post by Id</h1>

        <PostCard
          maxWidthSize={"100%"}
          contentText={longText}
          img={
            "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
      <div >
        <PopularPosts />
      </div>
    </div>
  );
};

export default SinglePost;
