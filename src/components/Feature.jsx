import React from 'react';
import GroupImage from '../assets/Group.png';

const Feature = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col items-center px-4 max-w-4xl">
        <img src={GroupImage} alt="" className="w-20 h-10" />
        <h1 className="text-3xl text-center font-bold mb-4 text-blue-950 max-w-96">Collaborate without constraints</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 w-full max-w-3xl">
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-bold mb-2 text-blue-950">Free forever</h4>
            <p className="text-sm text-blue-950">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <a href="#" className="text-cyan-500">pricing plans</a> for more features.</p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-bold mb-2 text-blue-950">Easy integrations</h4>
            <p className="text-sm text-blue-950">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <a href="#" className="text-cyan-500">Marketplace</a>.</p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-bold mb-2 text-blue-950">Security first</h4>
            <p className="text-sm text-blue-950">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our <a href="#" className="text-cyan-500">Trust Center</a>.</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full max-w-md">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full">Sign up free →</button>
        </div>
      </div>
    </section>
  );
};

export default Feature;