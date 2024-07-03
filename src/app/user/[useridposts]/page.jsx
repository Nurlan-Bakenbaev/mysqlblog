import PostCard from "@/components/Postcard";
import React from "react";

const UserPostsById = () => {
  return (
    <div>
      <h1 className="post-title ">User Posts</h1>
      <PostCard
        img={
          "https://plus.unsplash.com/premium_photo-1661928975475-57502a6e34a5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </div>
  );
};

export default UserPostsById;
