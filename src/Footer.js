import React from "react";
import bessalani_logo from "./Assests/bessalani_logo.png";
import { AiFillLinkedin, AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#e6e7eb] lg:px-10">
      <div className="p-10 space-x-5 grid sm:grid-cols-9 gap-5">
        <div className="flex flex-col col-span-3">
          <div className="flex flex-col w-[12rem] h-auto pb-5">
            <img src={bessalani_logo} alt="logo" />
          </div>
          <div>
            <p className="text-sm font-normal text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="flex space-x-5 mt-2 pt-2">
            <a
              href="https://www.linkedin.com/company/thebessalani/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin
                style={{ fontSize: "26px" }}
                className="text-gray-600 hover:text-blue-800"
              />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <AiFillYoutube
                style={{ fontSize: "26px" }}
                className="text-gray-600 hover:text-red-600"
              />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <AiFillFacebook
                style={{ fontSize: "26px" }}
                className="text-gray-600 p-0 m-0 hover:text-blue-800"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col col-span-2">
          <h1 className="font-bold flex text-xl w-full text-left text-cyan-800 h-[3rem] justify-start items-end">
            Course
          </h1>
          <div className="flex-col text-left w-full py-1 text-gray-500 font-normal text-sm space-y-1">
            <div className="hover:text-cyan-800 hover:font-semibold transition-all">
              <a href="/data-science">Data Science with Python</a>
            </div>
            <div className="hover:text-cyan-800 hover:font-semibold transition-all">
              <a href="/java-development">Java Development</a>
            </div>
            <div className="hover:text-cyan-800 hover:font-semibold transition-all">
              <a href="/machine-learning">Machine Learning</a>
            </div>
            <div className="hover:text-cyan-800 hover:font-semibold transition-all">
              <a href="/deep-learning">Deep Learning</a>
            </div>
            <div className="hover:text-cyan-800 hover:font-semibold transition-all">
              <a href="/full-stack-web-developer">Full Stack Web Development</a>
            </div>
            <div className="hover:text-cyan-800 hover:font-semibold transition-all">
              <a href="/devops">Devops</a>
            </div>
            <div className="hover:text-cyan-800 hover:font-semibold transition-all">
              <a href="/product-manager">Product Manager</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2">
          <h1 className="font-bold flex text-xl w-full text-left text-cyan-800 h-[3rem] justify-start items-end">
            Useful Link
          </h1>
          <div className="flex-col text-left w-full py-1 text-gray-500 font-normal text-sm space-y-1">
            <div className="hover:text-cyan-800 hover:font-semibold transition-all">
              <a href="/about">About</a>
            </div>
            <div className="hover:text-cyan-800 hover:font-semibold transition-all">
              <a href="/trainer">Became A Trainer</a>
            </div>
            <div className="hover:text-cyan-800 hover:font-semibold transition-all">
              <a href="/blog-listing">Blog</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2">
          <h1 className="font-bold flex text-xl w-full text-left text-cyan-800 h-[3rem] justify-start items-end">
            Address
          </h1>
          <div className="flex-col text-left w-full py-1 text-gray-500 font-normal text-sm space-y-1">
            <p className="text-sm font-normal text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:py-6 sm:pb-10 pb-32">
        <div className="sm:flex sm:flex-row flex-col space-x-2 sm:text-[1rem] text-[0.8rem] font-normal justify-center text-cyan-800 ">
          <div className="hover:font-semibold text-center">
            <p>© Copyright bessalani {new Date().getFullYear()}</p>
          </div>
          <div className="sm:block hidden">
            <p>|</p>
          </div>
          <div className="hover:font-semibold text-center">
            <p>+49-17635092041</p>
          </div>
          <div className="sm:block hidden">
            <p>|</p>
          </div>
          <div className="hover:font-semibold text-center">
            <p>upskill@bessalani.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
