"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const WritePost = () => {
  const [postValue, setPostValue] = useState("");
  console.log(postValue);
  return (
    <div>
      <form>
        <input
          className="border w-full py-4 pl-3"
          type="text"
          placeholder="Post title"
        />
        <ReactQuill theme="snow" value={postValue} onChange={setPostValue} />;
      </form>
    </div>
  );
};

export default WritePost;
