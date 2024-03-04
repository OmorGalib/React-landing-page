import React from 'react';
import WorkImage from '../assets/hybridwork.png';

const Section1 = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 max-w-4xl">
        {/* Left side */}
        <div className="flex flex-col md:w-5/12 mb-5 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-blue-950">Work together, wherever you work</h1>
          <p className="text-sm mb-4 text-blue-950">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
          <a href="#" className="text-sm mb-4 text-cyan-500">Learn more →</a>
        </div>
        {/* Right side */}
        <div className="md:w-1/2">
          <img src={WorkImage} alt="Work Image" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Section1;