"use client";
import Categories from "./Categories";
import React, { useState, useEffect } from "react";
import { useGetAllThePostsQuery } from "@/redux/service/reduxApi";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const PostCard = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const { data, isError, isSuccess, isLoading } = useGetAllThePostsQuery({
    page,
    limit,
  });
  const truncateText = (text, maxText) => {
    if (text.length <= maxText) {
      return text;
    } else {
      return text.slice(0, maxText) + "...";
    }
  };
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess, data]);
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between gap-5  bg-slate-50">
        <Categories />
      </div>
      <div className="mt-8">
        {isLoading && <p className="text-center">Loading...</p>}
        {isError && (
          <p className="text-center text-red-500">
            There was an error loading the posts.
          </p>
        )}
        {isSuccess && data && (
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              {data.posts.map((post) => (
                <div
                  key={post.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border border-gray-300  rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-shadow duration-300"
                >
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-700">
                    {truncateText(post.body, 200)}
                  </p>
                  {post.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))}
                  <div className="bg-slate-100 flex flex-row justify-between px-5 py-2">
                    <div className="dflex items-center gap-2">
                      <span className="text-green-500  text-xl">
                        <AiOutlineLike />
                      </span>
                      {post.reactions.likes}
                    </div>
                    <div className="dflex items-center gap-2 ">
                      <span className="text-red-500 text-xl">
                        <AiOutlineDislike />
                      </span>
                      {post.reactions.dislikes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                Previous
              </button>
              <div className="px-4 py-2">
                <span className="w-[30px] h-[30px] p-2 rounded-full border bg-slate-200">{`< ${page} >`}</span>
              </div>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                onClick={() => setPage((prev) => prev + 1)}
                disabled={data.posts.length < limit}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PostCard;
