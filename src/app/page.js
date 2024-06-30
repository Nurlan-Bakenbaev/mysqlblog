import PostCard from "@/components/Postcard";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-5">Recent Posts</h1>
      <div className="flex flex-wrap md:flex-row gap-4 justify-center">
        <div className=" my-6 duration-300 shadow-md hover:shadow-xl">
          <PostCard />
        </div>
        <div className="my-6 duration-300 shadow-md hover:shadow-xl">
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
