import { CategoriesLinks } from "@/helpers/CategoriesLinks";
import Link from "next/link";
import React from "react";
const Categories = () => {
  return (
    <div
      className=" w-full text-center  p-2 md:p-5
    rounded-lg shadow-md hover:shadow-xl duration-300"
    >
      <div >
        <ul className="  flex justify-between flex-row md:gap-2 ">
          {CategoriesLinks.map(({ text, url }) => (
            <Link className="hover:text-blue-400 " key={text} href={url}>
              {text}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Categories;
