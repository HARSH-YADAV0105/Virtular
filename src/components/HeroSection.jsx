import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flexflex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for the developers</span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-5xl'>
        Empower your creativity and bring your VR app ideas to life with our intutive development tools. Get Started today and turn your imagination into impulsive reality!!
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
          Start for Free
        </a>
        <a href="http://" className='py-4 px-3 mx-3 rounded-md border'>Documentation</a>

      </div>
      <div className='flex mt-10 justify-center'>
        <video muted loop autoPlay src={video1} type='video/mp4' className=' cursor-pointer rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4'></video>
        <video muted loop autoPlay src={video2} className=' cursor-pointer rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4'></video>
      </div>

    </div>
  )
}

export default HeroSection
