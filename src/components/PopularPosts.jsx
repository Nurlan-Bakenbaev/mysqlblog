import React from "react";
import PostCard from "./PostCard";

const PopularPosts = () => {
  return (
    <div>
      <div className="flex-1 ">
        <h5 className="text-lg text-center">Posts you may like</h5>
        <div className="flex overflow-x-auto  min-w-[280px] mt-2 flex-row md:flex-col gap-3">
          <PostCard maxWidthSize={270} />
          <PostCard maxWidthSize={270} />
          <PostCard maxWidthSize={270} />
          <PostCard maxWidthSize={270} />
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;
