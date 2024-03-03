import React from 'react';
import Walmart from '../assets/Walmart.png';
import Cisco from '../assets/cisco.png';
import Volvo from '../assets/Volvo.png';
import Deloitte from '../assets/deloitte.png';
import Okta from '../assets/okta.png';

const TrustedSection = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col items-center px-4 max-w-5xl">
        <p className="text-xs font-light mb-5">Trusted by 45M+ users</p>
        <div className="flex flex-row items-center justify-evenly mt-5 mb-5">
          <img src={Walmart} alt="Walmart" className="w-50 h-30" />
          <img src={Cisco} alt="Cisco" className="w-50 h-30" />
          <img src={Volvo} alt="Volvo" className="w-50 h-30" />
          <img src={Deloitte} alt="Deloitte" className="w-50 h-30" />
          <img src={Okta} alt="Okta" className="w-50 h-30" />
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;