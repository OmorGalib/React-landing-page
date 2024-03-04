import React from 'react';
import DocuSign from '../assets/docusign.png';
import VMWARE from '../assets/vmware.png';
import Frog from '../assets/frog.png';
import VmImage from '../assets/vmimage.png';
import DocImage from '../assets/docimage.png';
import FrogImage from '../assets/frogimage.png';

const Div3 = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col items-center px-4 max-w-4xl">
        <h1 className="text-4xl text-center font-bold mb-4 text-blue-950">Loved by the world's best teams</h1>
        <div className="flex justify-center items-center w-full max-w-md mb-4">
          <button className="bg-white text-blue-600 px-6 py-3 mt-2 rounded-full border border-blue-600">See all customer stories → </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4 w-full max-w-3xl">
          <div className="flex flex-col items-start mx-2 my-2">
            <img src={VMWARE} alt="VMWARE" className="mt-4 mb-4" />
            <p className="text-sm text-blue-950 mt-4 mb-2 h-44">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
            <div className="flex flex-row mt-5 align-center justify-center m-2">
              <img src={VmImage} alt="VmImage" className="w-14 h-12"/>
              <div className="flex flex-col align-center justify-center mx-2">
                <p className="text-xs font-light text-blue-950">Roxanne Mustafa</p>
                <p className="text-xs font-light text-blue-950">Design Team Lead at VMware</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mx-2 my-2">
            <img src={DocuSign} alt="DocuSign"className="mt-4 mb-4" />
            <p className="text-sm text-blue-950 mt-4 mb-2 h-44">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
            <div className="flex flex-row mt-5 align-center justify-center m-2">
              <img src={DocImage} alt="DocImage" className="w-14 h-12" />
              <div className="flex flex-col align-center justify-center mx-2">
                <p className="text-xs font-light text-blue-950">Jane Ashley</p>
                <p className="text-xs font-light text-blue-950">Head of Design at DocuSign</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mx-2 my-2">
            <img src={Frog} alt="Frog" className="mt-4 mb-4"/>
            <p className="text-sm text-blue-950 mt-4 mb-2 h-44">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
            <div className="flex flex-row mt-5 align-center justify-center m-2">
              <img src={FrogImage} alt="FrogImage" className="w-14 h-12"/>
              <div className="flex flex-col align-center justify-center mx-2">
                <p className="text-xs font-light text-blue-950">Laura Baird</p>
                <p className="text-xs font-light text-blue-950">Associate Design Director at frog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Div3;