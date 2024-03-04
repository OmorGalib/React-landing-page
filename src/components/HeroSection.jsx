import React, { useState } from 'react';
import HeroImage from '../assets/headerimage.png';
import Star from '../assets/star.png';
import HalfStar from '../assets/half star.png';
import G2 from '../assets/g2.png';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 max-w-4xl">
        {/* Left side */}
        <div className="flex flex-col md:w-5/12 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950">Take ideas from better to best</h1>
          <p className="text-sm mb-4">Miro is your team's visual platform to connect, collaborate, and create — together.</p>
          <form onSubmit={handleSubmit} className="flex flex-col mb-4">
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your work email" className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:border-blue-500 flex-grow" />
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 mt-3 rounded-full">Sign up free →</button>
          </form>
          <p className="text-xs mb-4">Collaborate with your team within minutes</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center">
                <img src={Star} alt="" className="w-4 h-4" />
                <img src={Star} alt="" className="w-4 h-4" />
                <img src={Star} alt="" className="w-4 h-4" />
                <img src={Star} alt="" className="w-4 h-4" />
                <img src={HalfStar} alt="" className="w-4 h-4" />
              </div>
              <p className="text-xs ml-1">Based on 5149+ reviews:</p>
            </div>
            <div className="flex items-center">
              <img src={G2} alt="G2" className="w-6 h-6 mr-2" />
              <p className="text-sm font-semibold">GetApp</p>
              <p className="text-sm font-semibold ml-2">Capterra</p>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="md:w-1/2">
          <img src={HeroImage} alt="Hero Image" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;