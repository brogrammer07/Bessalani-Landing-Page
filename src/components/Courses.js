import React, { useState } from "react";
import course1 from "../Assests/course1.png";
import course2 from "../Assests/course2.png";
import course3 from "../Assests/course3.png";
import course4 from "../Assests/course4.png";
import course5 from "../Assests/course5.png";
import course6 from "../Assests/course6.png";
import courseTemp1 from "../Assests/courseTemp1.png";
import courseTemp2 from "../Assests/courseTemp2.png";
import courseTemp3 from "../Assests/courseTemp3.png";
import courseTemp4 from "../Assests/courseTemp4.png";
const data = [
  {
    title: "Product Management",
    courseTempImg: courseTemp2,
    courseImg: course1,
    link: "/introduction-to-project-management",
    description:
      "Product management is an organizational role that directs every step of a product's lifetime, from development to positioning and price, by focusing first and foremost on the product and its users. Day-to-day responsibilities involve a wide range of strategic and tactical responsibilities. Product managers are tasked with defining a product's overall purpose.",
  },
  {
    title: "Devops",
    courseTempImg: courseTemp1,
    courseImg: course2,
    link: "/devops",
    description:
      "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes.",
  },
  {
    title: "Business Analyst",
    courseTempImg: courseTemp3,
    courseImg: course3,
    link: "/business-analyst",
    description:
      "Business analysts use data to form business insights and recommend changes in businesses and other organizations. Business analysts can identify issues in virtually any part of an organization, including IT processes, organizational structures, or staff development.",
  },
  {
    title: "Data Science",
    courseTempImg: courseTemp2,
    courseImg: course4,
    link: "/data-science",
    description:
      "Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions. Data science uses complex machine learning algorithms to build predictive models.",
  },
  {
    title: "Java Full Stack",
    courseTempImg: courseTemp4,
    courseImg: course5,
    link: "//java-development",
    description:
      "A full-stack developer is a person who can develop application's backend and frontend. Java full-stack is basically a term used for a web developer that uses Java to develop the entire technology stack is referred to as Java full stack developer.",
  },
  {
    title: "Machine Learning",
    courseTempImg: courseTemp2,
    courseImg: course6,
    link: "/machine-learning",
    description:
      "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.",
  },
];

let arr1 = Array(data.length).fill(false);
let arr2 = Array(data.length).fill(true);
const Courses = () => {
  const [showBack, setShowBack] = useState(arr1);
  const [showFront, setShowFront] = useState(arr2);

  const handleMouseEnter = (i) => {
    setShowBack(arr1);
    setShowFront(arr2);
    let temp1 = [...showFront];
    temp1[i] = false;
    setShowFront(temp1);
    let temp2 = [...showBack];
    temp2[i] = true;
    setShowBack(temp2);
  };
  const handleMouseLeave = (i) => {
    let temp1 = [...showFront];
    temp1[i] = true;
    setShowFront(temp1);
    let temp2 = [...showBack];
    temp2[i] = false;
    setShowBack(temp2);
  };

  return (
    <div className="bg-white pb-16">
      <div className="flex flex-col space-y-16 lg:max-w-[85%] lg:mx-auto py-16">
        <h1 className="font-bold text-[44px] text-center">
          Upskilling made simple
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10">
          {data.map((course, i) => (
            <div
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className={`bg-white h-[20rem] relative shadow-lg transition-all duration-150 `}
            >
              <div
                className={`${
                  showFront[i] ? "flex flex-col" : "hidden"
                } cursor-pointer`}
              >
                <div className="md:h-[10rem] h-[10rem] w-full">
                  <img
                    src={course.courseImg}
                    alt=""
                    className="w-full h-full object-cover"
                    // style={{ aspectRatio: 1.9 / 1, width: "100rem" }}
                  />
                </div>
                {/* <img
                  src={course.courseTempImg}
                  className="h-[120px] w-[120px] absolute top-20 left-10 shadow-md"
                  alt=""
                /> */}
                <div className="text-2xl mt-14 font-serif w-full h-auto flex items-center justify-center text-center absolute top-[55%]">
                  {course.title}
                </div>
              </div>
              <div
                className={`${
                  showBack[i] ? "flex flex-col" : "hidden"
                } mx-8 my-8 space-y-4`}
              >
                <h1 className="font-semibold text-[20px]">{course.title}</h1>
                <p className="text-[13px] text-[#707070]">
                  {course.description}
                </p>
                <div className="flex justify-end">
                  <button className="font-bold text-[12px] text-[#0400BE]">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
