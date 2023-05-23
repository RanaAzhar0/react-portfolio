import React, { useState } from "react";
import aboutImg from "../assets/images/img-2.jpg";
const About = () => {
  const info = [
    { text: "Years experience", count: "1.2" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "2" },
  ];
  const [checked, setChecked] = useState(false);

  const changeChecked = () => {
    setChecked(!checked);
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                As a React Frontend Developer with one year of professional experience, I possess a strong
                command of React.js and its ecosystem. I have successfully collaborated on the developmentof
                interactive and user-friendly web applications using React components, state management
                libraries, and modern frontend tools. With a solid understanding of HTML, CSS, and JavaScript, I
                have effectively translated design concepts into pixel-perfect and responsive user interfaces.
                Throughout my experience, I have gained proficiency in leveraging RESTful APIs and integrating
                them seamlessly into React applications.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="../assets/MAzharMaqbool.pdf" download>
                <button className="btn-primary" onClick={changeChecked} checked={checked} style={{
                  backgroundColor: checked ? "red" : "blue",
                }}>Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center ">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl hover:"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;