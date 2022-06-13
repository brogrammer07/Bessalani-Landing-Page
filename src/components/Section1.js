import React from "react";
import section1_1 from "../Assests/section1_1.png";
import section1_2 from "../Assests/section1_2.png";
import section1_3 from "../Assests/section1_3.png";
const Section1 = () => {
  return (
    <div className="flex flex-col space-y-16 lg:max-w-[85%] lg:mx-auto my-16">
      <h1 className="sm:text-[44px] text-[34px] font-bold text-center w-[90%] lg:w-[53%] self-center">
        Unlock the potential within your organization.
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
        <div className="bg-[#F3F1EF] md:h-[17rem] h-auto space-y-10">
          <img className="w-full" src={section1_1} alt="" />
          <div className="flex flex-col text-center space-y-3 w-[80%] mx-auto">
            <h1 className="font-semibold text-[20px]">Upskill and reskill</h1>
            <p>your learners faster with pathways and stackable credentials</p>
          </div>
        </div>
        <div className="bg-[#F3F1EF] md:h-[17rem] h-auto space-y-10">
          <img className="w-full" src={section1_2} alt="" />
          <div className="flex flex-col text-center space-y-3 w-[80%] mx-auto">
            <h1 className="font-semibold text-[20px]">
              Accelerate digital transformation
            </h1>
            <p>with highly skilled Teachers</p>
          </div>
        </div>
        <div className="bg-[#F3F1EF] md:h-[17rem] h-auto space-y-10">
          <img className="w-full" src={section1_3} alt="" />
          <div className="flex flex-col text-center space-y-3 w-[80%] mx-auto">
            <h1 className="font-semibold text-[20px]">Retain employees</h1>
            <p>by enhancing their business skills and career paths</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
