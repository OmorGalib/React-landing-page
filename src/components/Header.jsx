import React from 'react'
import Language from '../assets/Language.png'
import Logo from '../assets/Logo.png'
import dropdown from '../assets/dropdown.png'

const Header = () => {
  return ( 
    <nav className="flex justify-between items-center py-4 px-8 bg-white">
       {/* left side */}
      <div className="flex items-center">
        <div className="mr-6">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="hidden md:flex">
          <div className="group relative mr-6">
            <button className="flex items-center focus:outline-none">
              Product <img className="ml-1"src={dropdown} alt="" />
            </button>
            <div className="hidden group-hover:block absolute z-10 bg-white py-2 px-4 shadow-lg rounded">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
            </div>
          </div>
          <div className="group relative mr-6">
            <button className="flex items-center focus:outline-none">
              Solutions <img className="ml-1"src={dropdown} alt="" />
            </button>
            <div className="hidden group-hover:block absolute z-10 bg-white py-2 px-4 shadow-lg rounded">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
            </div>
          </div>
          <div className="group relative mr-6">
            <button className="flex items-center focus:outline-none">
              Resources <img className="ml-1"src={dropdown} alt="" />
            </button>
            <div className="hidden group-hover:block absolute z-10 bg-white py-2 px-4 shadow-lg rounded">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
            </div>
          </div>
        </div>
        <a href="#" className="hidden md:block mr-6">Enterprise</a>
        <a href="#" className="hidden md:block mr-6">Pricing</a>
      </div>

      {/* Right side */}
      <div className="flex items-center">
        <div className="flex flex-row">
          <img src={Language} alt="Language" className="h-6 w-auto"/>
          <span className="font-medium">EN</span>
        </div>
        <a href="#" className="hidden md:block m-5">Contact Sales</a>
        <a href="#" className="hidden md:block mr-5">Login</a>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">Sign up free →</button>
      </div>
    </nav>
  )
}

export default Header