import React from "react";
import aboutEdu from "../Assests/aboutEdu.jpeg";
import summary1 from "../Assests/summary1.svg";
import summary2 from "../Assests/summary2.svg";
import summary3 from "../Assests/summary3.svg";

const AboutUs = () => {
  return (
    <div className="bg-[#003366]">
      <div className="flex flex-col text-center text-white py-[3rem] space-y-3">
        <h1 className="font-sans font-bold text-4xl">About Bessalani</h1>
        <p className="font-semibold text-lg">
          Immerse yourself in a new world of learning.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row sm:px-[7rem] px-[2rem] pb-[6rem] pt-[2rem] space-x-0 lg:space-x-16 lg:space-y-0 space-y-16">
        <div className="flex-[0.5]">
          <img className="rounded-3xl" src={aboutEdu} alt="about_image" />
        </div>
        <div className="flex-[0.5] space-y-8">
          <div className="flex space-x-8 items-start">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={summary1}
              alt="summary-1"
            />
            <div className="flex flex-col text-white space-y-2">
              <h1 className="font-bold text-2xl">Real Career Growth</h1>
              <p className="text-sm">
                Cutting edge curriculum designed in guidance with industry and
                academia to develop job ready skills.
              </p>
            </div>
          </div>
          <div className="flex space-x-8 items-start">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={summary2}
              alt="summary-1"
            />
            <div className="flex flex-col text-white space-y-2">
              <h1 className="font-bold text-2xl">Global Industry Experts</h1>
              <p className="text-sm">
                A team of industry professionals who are experts in their
                respective fields will guide you.
              </p>
            </div>
          </div>
          <div className="flex space-x-8 items-start">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={summary3}
              alt="summary-1"
            />
            <div className="flex flex-col text-white space-y-2">
              <h1 className="font-bold text-2xl">On Demand Virtual Training</h1>
              <p className="text-sm">
                We offer on-demand live virtual learning experiences that give
                you the flexibility to learn at your own pace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
