"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const WritePost = () => {
  const [postValue, setPostValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["image"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "image",
    "color",
    "background",
    "align",
  ];
  console.log(postValue);
  return (
    <div>
      <form>
        <input
          className="border w-full py-4 pl-3"
          type="text"
          placeholder="Post title"
        />
        <ReactQuill
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
