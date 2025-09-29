import React from 'react';
import Hero from './Hero';
import TwoColumn from '@components/TwoColumn';
import ContactModule from '@components/HomePage/ContactModule';

const HomePage = () => {
  const Module1 = (
    <div className="flex flex-col px-4 sm:mr-6 w-full">
      <h2 className="font-MonteCarlo text-6xl">Smoking Lounge</h2>
      <p className="font-Baskerville text-xl mt-6 pl-6 leading-relaxed pb-6 md:pb-0">
        Step into a world of refined comfort where rich leather chairs, smooth
        jazz, and the warm glow of aged wood set the stage for meaningful
        conversation and camaraderie. Whether you're savoring a fine cigar or
        exploring new blends, our smoking lounge offers a sophisticated retreat
        for those who appreciate quality and&nbsp;connection.
      </p>
    </div>
  );
  const Module2 = (
    <div className="flex w-full max-w-96 items-center justify-center">
      <img
        className="w-full rounded-xl max-w-96"
        src="/public/i/smoking-lounge.png"
        alt="Smoking Lounge"
      />
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ContactModule />
      <div className="flex flex-col justify-center items-center">
        <div className="flex md:max-w-5/6">
          <TwoColumn
            module1={Module1}
            module2={Module2}
            dir="ltr"
            containerClasses="py-8 px-6"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
