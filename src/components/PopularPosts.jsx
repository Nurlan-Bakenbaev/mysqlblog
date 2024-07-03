import React from "react";
import PostCard from "./PostCard";

const PopularPosts = () => {
  return (
    <div>
      <div className="flex-1 ">
        <h5 className="text-lg text-center">Posts you may like</h5>
        <div
          className="flex overflow-x-auto mt-2 py-5
         flex-row md:flex-col gap-3"
        >
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;
