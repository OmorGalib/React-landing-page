import React from 'react';
import IntImage from '../assets/intigration.png';

const Section2 = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 max-w-4xl">
        {/* Left side */}
        <div className="md:w-1/2">
          <img src={IntImage} alt="Work Image" className="w-full rounded-lg shadow-lg" />
        </div>
        {/* Right side */}
        <div className="flex flex-col md:w-5/12 mb-5 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-blue-950">Connect your tools, close your tabs</h1>
          <p className="text-sm mb-4 text-blue-950">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
          <a href="#" className="text-sm mb-4 text-cyan-500">Learn more →</a>
        </div>
      </div>
    </section>
  );
};

export default Section2;