"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "@/helpers/react-quill";
const WritePost = () => {
  const [postValue, setPostValue] = useState("");
  console.log(postValue);
  return (
    <div>
      <form className="px-6 mt-8 flex flex-col gap-5">
        <input
          className="border w-full text-lg py-4 pl-3 font-semibold"
          type="text"
          placeholder=" Awesome title"
        />
        <ReactQuill
          placeholder="Tell your story..."
          modules={modules}
          formats={formats}
          theme="snow"
          value={postValue}
          onChange={setPostValue}
        />
      </form>
    </div>
  );
};

export default WritePost;
