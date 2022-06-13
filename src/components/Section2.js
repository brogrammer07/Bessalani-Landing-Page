import React from "react";
import section2_1 from "../Assests/section2_1.png";
import section2_2 from "../Assests/section2_2.png";
const Section2 = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="my-16">
        <div className="lg:max-w-[75%] lg:mx-auto flex flex-col lg:flex-row items-center space-x-16">
          <img
            className="lg:h-[360px] h-[300px] w-[400px] lg:w-[520px]"
            src={section2_1}
            alt=""
          />
          <div className="flex flex-col self-center space-y-4 ">
            <h1 className="font-bold sm:text-[40px] text-[26px]">
              Dive-in and provide specific learning experiences.
            </h1>
            <p className="text-[18px]">
              Develop skills pathways to bridge talent gaps and drive business
              transformation with scalable, measurable learning strategies.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 bg-[#F3F1EF]">
        <div className="lg:max-w-[75%] lg:mx-auto flex flex-col-reverse items-center lg:flex-row space-x-16">
          <div className="flex flex-col self-center space-y-4 mx-10">
            <h1 className="font-bold sm:text-[40px] text-[26px]">
              Collaborate to engage employees.
            </h1>
            <p className="text-[18px]">
              Build and scale a vibrant learning culture with easy access to
              relevant, individual learning journeys anytime. Help employees
              learn at their pace in their place.
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
