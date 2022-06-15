import React from "react";
import section2_1 from "../Assests/section2_1.png";
import section2_2 from "../Assests/section2_2.png";
const Section2 = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="md:mb-24 mb-16">
        <div className="lg:max-w-[85%] lg:mx-auto flex flex-col lg:flex-row items-center space-x-16">
          <img
            className="lg:h-[360px] h-[300px] w-[400px] lg:w-[520px]"
            src={section2_1}
            alt=""
          />
          <div className="flex flex-col self-center space-y-4 ">
            <h1 className="font-bold sm:text-[40px] text-[26px]">
              Provide the innovative learning environment.
            </h1>
            <p className="text-[18px]">
              Design the skill pathways to effective and flexible learning,
              transforming and scaling the business, and building the Innovation
              led teams.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 bg-[#F3F1EF]">
        <div className="lg:max-w-[85%] lg:mx-auto flex flex-col-reverse items-center lg:flex-row space-x-16">
          <div className="flex flex-col self-center space-y-4 mx-10">
            <h1 className="font-bold sm:text-[40px] text-[26px]">
              Create and Collaborate employees in unique learning Experience.
            </h1>
            <p className="text-[18px]">
              We believe each enterprise has unique culture. Create the unique
              program for employees making them transformation leader.
            </p>
          </div>
          <img
            className="lg:h-[360px] h-[300px] w-[400px] lg:w-[520px]"
            src={section2_2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
