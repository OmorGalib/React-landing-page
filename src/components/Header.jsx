import React from 'react';
import Logo from '../assets/Logo.png';
import Language from '../assets/Language.png';
import Dropdown from '../assets/dropdown.png';

const Header = () => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex justify-between items-center">
          {/* Left side */}
          <div className="flex items-center">
            <div className="mr-6">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex">
              {['Product', 'Solutions', 'Resources'].map((item, index) => (
                <div key={index} className="group relative mr-6">
                  <button className="flex items-center focus:outline-none">
                    {item} <img className="ml-1" src={Dropdown} alt="" />
                  </button>
                  <div className="hidden group-hover:block absolute z-10 bg-white py-2 px-4 shadow-lg rounded">
                    <a href="#">Item 1</a>
                    <a href="#">Item 2</a>
                    <a href="#">Item 3</a>
                  </div>
                </div>
              ))}
              <a href="#" className="hidden md:block mr-6">Enterprise</a>
              <a href="#" className="hidden md:block mr-6">Pricing</a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            <div className="flex flex-row mr-5">
              <img src={Language} alt="Language" className="h-6 w-auto" />
              <span className="font-medium">EN</span>
            </div>
            <a href="#" className="hidden md:block mr-5">Contact Sales</a>
            <a href="#" className="hidden md:block mr-5">Login</a>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">Sign up free →</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;