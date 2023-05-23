import React,{useEffect} from "react";
import hireMe from "../assets/images/pngtree-male-character-searching-job-png-image_6022118.png";
import Aos from "aos";
import 'aos/dist/aos.css'
import sound from "../assets/images/kick.wav";



const Hireme = () => {
  const play=()=>{
    new Audio(sound).play()
  }


  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">

        <div >
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
           I am well-versed in frontend development best practices,<br/> including code optimization, performance enhancements,<br/> and browser compatibility.Proven ability to translate <br/>designs and wireframes into high-quality code, and write<br/> application interface code via Javascript and <br/>ReactJS  workflows
          </p>
          <button onClick={play} className="btn-primary mt-10">Say Hello</button>         
          </div>
        {/* <div className="lg:h-[32rem] h-80  bottom-0 -right-3 object-cover border shadow-red-600 shadow-2xl">qlmaqjsnj</div> */}
        <img 
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80  bottom-0 -right-3 object-cover border shadow-black shadow-2xl" data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default Hireme;
