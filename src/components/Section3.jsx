import React from 'react';
import BackgroundImage from '../assets/backgroundImage.png';

const Section3 = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto relative bg-cover bg-center max-w-4xl h-96 pt-6" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2">
          </div>
          <div className="md:w-1/2 md:ml-auto flex items-center justify-center">
            <div className="bg-none p-8 mt-8 rounded-lg flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-4 text-blue-950">The Ways We Work</h2>
              <p className="text-sm mb-4 text-blue-950">How has our relationship with work changed?</p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full">View the report →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;