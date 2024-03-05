import React from 'react';
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Youtube from '../assets/youtube.png'
import Hyphen from '../assets/hyphen.png'
import Newsletter from '../assets/news.png'

const Footer = () => {
  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: '#02033B' }}>
      <div className="container mx-auto flex flex-col px-4 max-w-4xl">
        <div className="grid grid-cols-4 gap-5">
          <div className="flex flex-col">
            <h2 className="text-white font-bold mb-5 text-lg">Scan. Detect. Remove.</h2>
            <div className="flex flex-row justify-between w-3/5 mb-5 mt-5">
              <img src={Twitter} alt="Image 1" className="w-8 h-8 " />
              <img src={Facebook} alt="Image 2" className="w-8 h-8 " />
              <img src={Youtube} alt="Image 3" className="w-8 h-8" />
            </div>
            <div className="flex flex-row justify-start mb-5 mt-5">
              <p className="text-xs text-white font-thin border-b-2 mr-2">Privacy Policy</p>
              <p className="text-xs text-white font-thin border-b-2 ">Terms of Service</p>
            </div>
            <p className="text-xs text-white font-thin mt-4 mb-4">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
            <p className="text-xs text-white font-thin mb-4">Designed & developed by Bigger Picture</p>
          </div>
          <div className="flex flex-col ml-5">
            <h3 className="text-white font-bold text-2xl mb-4">Miro.</h3>
            <div className="flex mb-4">
              <div className="border border-white w-3/5" />
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex flex-row mt-3">
                <img src={Hyphen} alt=""className="w-4"/>
                <p className="text-yellow-500 ml-4 ">iPhone</p>
              </div>
              <div className="flex flex-row mt-3">
                <img src={Hyphen} alt=""className="w-4"/>
                <p className="text-yellow-500 ml-4">Andriod</p>
              </div>
              <div className="flex flex-row mt-3">
                <img src={Hyphen} alt=""className="w-4"/>
                <p className="text-yellow-500 ml-4">Help</p>
              </div>
              <div className="flex flex-row  mt-3">
                <img src={Hyphen} alt=""className="w-4"/>
                <p className="text-yellow-500 ml-4">About</p>
              </div>
              <div className="flex flex-row mt-3">
                <img src={Hyphen} alt=""className="w-4"/>
                <p className="text-yellow-500 ml-4">Insights</p>
              </div>
              
            </div>
          </div>
          <div className="bg-yellow-500 h-3/5 w-4/5 flex flex-col justify-center col-span-2 rounded-3xl"  style={{ backgroundImage: `url(${Newsletter})`,backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat' }}>
            <h2 className="text-blue-950 text-2xl font-bold ml-5 mb-4" >Sign up to our newsletter</h2>
            <p className="text-blue-950 text-xs w-4/5 ml-5 mb-4">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
            <div className="flex flex-row w-4/5">
              <input type="text" placeholder='Enter address' className="border border-gray-300 px-2 py-1 ml-5 w-4/5 rounded-l-3xl" />
              <button className="text-white  px-4 py-1 w-2/5 rounded-r-3xl " style={{ backgroundColor: '#02033B' }}>Submit</button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-white text-xs font-thin w-1/2 ">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;