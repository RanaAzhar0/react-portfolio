import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
// import html from "../assets/images/html.png";
import html from "../assets/images/logo-html5.svg";
import css3 from "../assets/images/logo-css3.svg";
import react from "../assets/images/logo-react.svg";
import nodejs from "../assets/images/logo-nodejs.svg";













const Skills = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  const skills = [
    {
      logo: html,
      level: "Advance",
      count: 86,
    },
    {
      logo: css3,
      level: "Expect",
      count: 90,
    },
    {
      logo: react,
      level: "Intermediate",
      count: 80,
    },
    {
      logo: nodejs,
      level: "Beginner",
      count: 10,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap ">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group   border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl" data-aos="flip-right"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  
               <img  className="py-1 px-1 rounded-full bg-white h-10 w-10 transition-transform duration-300 hover:scale-125 hover:bg-stone-400" src={skill.logo}/>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
