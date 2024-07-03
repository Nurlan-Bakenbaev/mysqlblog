import PostCard from "@/components/Postcard";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="post-title ">Recent Posts</h1>
      <div className="flex flex-wrap md:flex-row gap-4 justify-center posts-container">
        <div className="duration-300 shadow-md hover:shadow-2xl">
          <PostCard />
        </div>
        <div className=" duration-300 shadow-md hover:shadow-xl">
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
