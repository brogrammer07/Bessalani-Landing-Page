import React from "react";
import mainImage from "../Assests/main.png";
const MainSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row my-24 px-10 lg:max-w-[85%] lg:mx-auto">
      <div className="space-y-5 w-auto">
        <h1 className="font-bold sm:text-[44px] text-[34px] sm:text-left text-center">
          Get new skills for your personal & professional life online
          <span className="text-[#04698D]">&rarr;</span>
        </h1>
        <p className="text-[22px] sm:text-left text-center">
          Take advantage of online learning opportunities to develop personal
          and professional skills
        </p>
        <button className="bg-[#F48221] text-white sm:w-[12rem] w-full h-[2.5rem] rounded-md hover:bg-[#ee750b] transition-all duration-150">
          Start Learning Now
        </button>
      </div>
      <div className="flex justify-center m-0 p-0 w-auto">
          <img className="w-[25rem] h-auto md:w-[45rem]" src={mainImage} alt="" />
      </div>
    </div>
  );
};

export default MainSection;
