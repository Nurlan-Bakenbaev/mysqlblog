import Link from "next/link";
import React from "react";
import { navLinks } from "@/helpers/Navlinks";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white xs:text-base text-2xl font-bold">
          MySQL-App
        </div>
        <ul className="flex space-x-5">
          {navLinks.map(({ text, url, icon }) => (
            <Link className=" hover:text-blue-300" key={text} href={`${url}`}>
              <div className="dflex gap-2 items-center">
                <span className="text-xl" title={text}>
                  {icon}
                </span>
                <p className="hidden md:block"> {text}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
