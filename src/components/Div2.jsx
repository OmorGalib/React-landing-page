import React from 'react'
import UXImage from '../assets/uxdesign.png'
import RightIcon from '../assets/rightIcon.png'
import DimonIcon from '../assets/dimond.png'
import FigmaIcon from '../assets/figmaIcon.png'
import NIcon from '../assets/nIcon.png'

const Div2 = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col px-4 max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-950">Built for all kinds of teams</h1>
          <div className="container mx-auto flex justify-around items-center max-w-4xl m-5">
             <button className="bg-zinc-200 text-black text-sm text-center p-2 rounded-full border-current">UX & Design</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Marketing</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Product Management</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Engineering</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Consultants</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Agile Coaches</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Sales</button>
          </div>
          <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 max-w-4xl mt-5 mb-5">
           {/* Left side */}
             <div className="flex flex-col md:w-5/12 mt-5 mb-5 md:mb-0">
               <div className="flex flex-row m-2">
                  <img src={RightIcon} alt="" className="w-5 h-5"/>
                  <p className="text-sm text-blue-950 ml-4">Build low-fi wireframes</p>
               </div>
               <div className="flex flex-row m-2">
                  <img src={RightIcon} alt="" className="w-5 h-5"/>
                  <p className="text-sm text-blue-950 ml-4">Involve stakeholders in the design process</p>
               </div>
               <div className="flex flex-row m-2">
                  <img src={RightIcon} alt="" className="w-5 h-5"/>
                  <p className="text-sm text-blue-950 ml-4">Run engaging design workshops</p>
               </div>
               <a href="#" className="text-sm m-4 text-cyan-500">Learn more →</a>
               <p className="text-sm mb-4 text-blue-950 m-4 font-semibold">Integrate your favorite tools</p>
               <div className="flex flex-row justify-around mb-4 w-3/5">
                  <img src={DimonIcon} alt="Dimond Icon" className="w-8 h-8" />
                  <img src={FigmaIcon} alt="Figma Icon" className="w-8 h-8" />
                  <img src={NIcon} alt="N icon" className="w-8 h-8" />
              </div>

             </div>
           {/* Right side */}
             <div className="md:w-1/2">
               <img src={UXImage} alt="UX Image" className="w-full rounded-lg shadow-lg" />
             </div>
          </div>
      </div>
    </section>
  )
}

export default Div2