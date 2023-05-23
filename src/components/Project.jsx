import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/neo-reach.jpg";
import project2 from "../assets/images/reaT-form.jpg";
import project3 from "../assets/images/wine-shope.jpg";
import project4 from "../assets/images/4-pro.jpg";
import project5 from "../assets/images/mobile .jpg";
import project_person from "../assets/images/img-01.webp";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: " neoReach",
      github_link: "https://github.com/RanaAzhar0/neoreacht-app.git",
      live_link: "https://ranaazhar0.github.io/neoreacht-app/",
    },
    {
      img: project2,
      name: "React-Form ",
      
      github_link: " https://github.com/RanaAzhar0/signin-signup.git",
      live_link: "https://ranaazhar0.github.io/signin-signup/",
    },
    {
      img: project3,
      name: "Wine-Shope",
      github_link: "https://github.com/RanaAzhar0/wine-shope.git",
      live_link: "https://ranaazhar0.github.io/wine-shope/",
    },
    {
      img: project4,
      name: "js-pro-app",
      github_link:
        "https://github.com/RanaAzhar0/-my-pro-app.git",
      live_link: "https://ranaazhar0.github.io/-my-pro-app/",
    },
    {
      img: project5,
      name: "Mobile-App",
      github_link: "https://github.com/RanaAzhar0/moblie-theme.git",
      live_link: "https://ranaazhar0.github.io/moblie-theme/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
