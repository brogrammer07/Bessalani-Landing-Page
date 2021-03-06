import React from "react";
import AboutUs from "./components/AboutUs";
import Courses from "./components/Courses";
import MainSection from "./components/MainSection";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

const Main = () => {
  return (
    <div className="m-0 p-0">
      <MainSection />
      <Section1 />
      <Section2 />
      <Courses />
      <AboutUs />
    </div>
  );
};

export default Main;
