import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import DarkMode from "./DarkMode";
import Menuitem from "./Menuitem";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <Menuitem title="Home" address="/" Icon={AiFillHome} />
        <Menuitem title="About" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkMode />
        <Link href="/">
          <h2 className="text-2xl mx-4">
            <span className=" font-bold text-xl bg-amber-400 py-1 px-2 rounded-lg mr-2">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
