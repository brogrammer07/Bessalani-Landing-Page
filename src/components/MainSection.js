import React from "react";
import mainImage from "../Assests/main.png";
const MainSection = () => {
  return (
    <div className="flex  flex-col-reverse lg:flex-row my-24 space-x-12 lg:max-w-[70%] lg:mx-auto px-4">
      <div className=" space-y-5">
        <h1 className="font-bold text-[44px]">
          Get new skills for your personal & professional life online
          <span className="text-[#04698D]">&rarr;</span>
        </h1>
        <p className="text-[22px]">
          Take advantage of online learning opportunities to develop personal
          and professional skills
        </p>
        <button className="bg-[#F48221] text-white w-[12rem] h-[2.5rem] rounded-md hover:bg-[#ee750b] transition-all duration-150">
          Start Learning Now
        </button>
      </div>
      <div className="">
        <img src={mainImage} alt="" />
      </div>
    </div>
  );
};

export default MainSection;
