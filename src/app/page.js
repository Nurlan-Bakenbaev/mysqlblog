import PostCard from "@/components/Postcard";
import React from "react";
import { longText } from "@/developing/helpers";
const Page = () => {
  const truncateText = (text, maxLetters) => {
    if (text.length <= maxLetters) {
      return text;
    } else {
      return text.slice(0, maxLetters) + "...read more";
    }
  };
  return (
    <div>
      <h1 className="post-title ">Recent Posts</h1>
      <div className="flex flex-wrap md:flex-row gap-4 justify-center posts-container">
        <div className="duration-300 shadow-md hover:shadow-2xl">
          <PostCard
            contentText={truncateText(longText, 80)}
            img={
              "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className=" duration-300 shadow-md hover:shadow-xl">
          <PostCard
            contentText={truncateText(longText, 80)}
            img={
              "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
