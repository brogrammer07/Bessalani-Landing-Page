import React from "react";
import logo from "./Assests/bessalani_logo.png";
import { MdOutlineApps } from "react-icons/md";
const Header = () => {
  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center py-4 lg:max-w-[70%] lg:mx-auto ">
        <div className="flex items-center space-x-20">
          <img src={logo} className="w-[197px] h-[67px]" alt="Bessalani" />
          <button className="flex items-center bg-[#04698D] text-white w-[8rem] h-[2.5rem] rounded-lg justify-center space-x-5">
            <MdOutlineApps className="" size={25} />
            <h1>Courses</h1>
          </button>
        </div>
        <div className="flex space-x-12">
          <h1>About</h1>
          <h1>Blog</h1>
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
