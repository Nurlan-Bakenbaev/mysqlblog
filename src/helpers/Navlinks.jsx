import { CiHome } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";

export const navLinks = [
  {
    id: "home",
    text: "Home",
    url: "/",
    icon: <CiHome />,
  },
  {
    id: "write",
    text: "Write",
    url: "/write",
    icon: <CiEdit />,
  },
  {
    id: "login",
    text: "Login",
    url: "/login",
    icon: <IoMdLogIn />,
  },
];
