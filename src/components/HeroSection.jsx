import React from 'react';
import HeaderImage from '../assets/headerimage.png';
import Star from '../assets/star.png';
import HalfStar from '../assets/half star.png';
import G2 from '../assets/g2.png';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 max-w-5xl mx-auto">
        {/* Left side */}
        <div className="flex flex-col md:w-5/12 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950">Take ideas from better to best</h1>
          <p className="text-sm mb-4">Miro is your team's visual platform to connect, collaborate, and create — together.</p>
          <div className="flex flex-col mb-4">
            <input type="email" placeholder="Enter your work email" className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:border-blue-500 flex-grow" />
            <button className="bg-blue-500 text-white px-6 py-2 mt-3 rounded-full">Sign up free</button>
          </div>
          <p className="text-xs mb-4">Collaborate with your team within minutes</p>
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
              <img src={Star} alt="" className="w-4 h-4" />
              <img src={Star} alt="" className="w-4 h-4" />
              <img src={Star} alt="" className="w-4 h-4" />
              <img src={Star} alt="" className="w-4 h-4" />
              <img src={HalfStar} alt="" className="w-4 h-4" />
              </div>
              <p className="text-xs">Based on 5149+ reviews:</p>
            </div>
            <img src={G2} alt="G2" className="w-6 h-6 mr-2" />
            <p className="text-sm font-semibold">GetApp</p>
            <p className="text-sm font-semibold ml-2">Capterra</p>
          </div>
        </div>
        {/* Right side */}
        <div className="md:w-1/2">
          <img src={HeaderImage} alt="Hero Image" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;