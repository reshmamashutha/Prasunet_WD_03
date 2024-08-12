import React from 'react'
import  video1 from "../assets/video1.mp4"
import  video2 from "../assets/video2.mp4"


function Herosection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-5xl   text-center tracking-wide">
        VirtualReality build tools
        </h1>
        <span className=" text-3xl light:text-light-text dark:text-white" >
         
         for developers
        </span>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border light:border-light-border dark:border-dark-border dark:text-white">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-1 my-2"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx- my-2"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        </div>
        </div>
  )
}

export default Herosection