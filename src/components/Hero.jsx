import React from "react";
import hero from "../assets/images/img0-1.jpg";
import hero1 from "../assets/images/img-2.jpg";

import { AiFillInstagram } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
// import  { useTypewriter, Cursor ,Typewriter} from 'typewriter-effect/dist/core';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import sound from "../assets/images/kick.wav";



const Hero = () => {
  const play=()=>{
    new Audio(sound).play()
  }
  const [text] = useTypewriter({
    words: [ 'am a FrontEnd', 'Developer', 'Hire me...'],
    loop:20,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  const [name] = useTypewriter({
    words: ['Azhar Maqbool'],
    loop: 1,
    onLoopDone: () => (`loop completed after infinet runs.`)
  })



  return (
    <section
      id="home"
      className="min-h-screen flex  py-10 md:flex-row flex-col items-center" 
    >
      <div className="flex-1 flex items-center justify-center h-full shadow-l shadow-black ">
        <img src={hero} alt="" className="opacity-60 md:w-11/12 h-full object-cover brightness-90 duration-500 rounded-md hover:rounded-full" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className=" md:leading-normal text-cyan-600 md:text-6xl text-5xl font-bold">Hello!</h1>
          <h1 className=" md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">My Name is  
          <span className="text-cyan-500">
            <div className='App'>
              <span>{name}</span>
            </div>
          </span>
          <span className="text-cyan-500">
            <div className='App'>
              <span>{text}</span>
              <Cursor cursorColor='red' />
            </div>
          </span>
           </h1>
          <button  onClick={play} className="btn-primary mt-8 ">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ">
            <a href="https://www.linkedin.com/in/muhammad-azhar-maqbool/" target="_blank"><AiFillLinkedin  onClick={play}   className="text-gray-600 hover:text-white cursor-pointer duration-500 " /></a>
           <a href="https://www.facebook.com/profile.php?id=100061989637327&mibextid=ZbWKwL" target="_blank"> <AiFillFacebook onClick={play}   className="text-gray-600 hover:text-white cursor-pointer duration-500" /></a>
            <AiFillInstagram  onClick={play}  className="text-gray-600 hover:text-white cursor-pointer  duration-500" />
            <a href="https://github.com/RanaAzhar0/Rana" target="_blank"><AiFillGithub  onClick={play}  className="text-gray-600 hover:text-white cursor-pointer  duration-500" /></a>


          </div>
        </div>
      </div>
      {/* //style={{backgroundImage:`url(${hero1})`, backgroundSize:"100% 100%", background: 'linear-gradient(to right, #ffffff, #000000)'}} */}
    </section>
  );
};

export default Hero;
