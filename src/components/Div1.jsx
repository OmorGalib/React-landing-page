import React from 'react'
import WorkImage from '../assets/workimage.png'

const Div1 = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col px-4 max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-950">Built for the way you work</h1>
          <div className="container mx-auto flex justify-around items-center max-w-4xl m-5">
             <button className="bg-zinc-200 text-black text-sm text-center p-2 rounded-full border-current">Brainstorming</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Diagramming</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Meetings & Workshops</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Scrum Events</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Mapping</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Research & Design</button>
             <button className="bg-white text-black text-sm text-center p-2 rounded-full border-current">Strategic Planning</button>
          </div>
          <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 max-w-4xl mt-5 mb-5">
           {/* Left side */}
             <div className="flex flex-col md:w-5/12 mt-5 mb-5 md:mb-0">
               <h1 className="text-base font-semibold mb-4 text-blue-950">Brainstorming</h1>
               <p className="text-sm mb-4 text-blue-950">Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
               <a href="#" className="text-sm mb-4 text-cyan-500">Learn more →</a>
             </div>
           {/* Right side */}
             <div className="md:w-1/2">
               <img src={WorkImage} alt="Work Image" className="w-full rounded-lg shadow-lg" />
             </div>
          </div>
      </div>
    </section>
  )
}

export default Div1