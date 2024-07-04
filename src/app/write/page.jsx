"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "@/helpers/react-quill";
import Image from "next/image";
const WritePost = () => {
  const [postValue, setPostValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setFileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <form className="px-6 mt-8 flex flex-col gap-5">
        <input
          className="border w-full text-lg py-4 pl-3 font-semibold"
          type="text"
          placeholder=" Awesome title"
        />
        <div>
          <input type="file" onChange={handleFileChange} />
          {selectedFile && (
            <>
              <p className="text-green-600">File name:{selectedFile.name}</p>
              <Image
                src={fileUrl}
                alt={selectedFile.name}
                width={150}
                height={100}
              />
            </>
          )}
        </div>
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
