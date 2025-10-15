import React from 'react';
import Hero from './Hero';
import TwoColumn from '@components/TwoColumn';
import ContactModule from '@components/HomePage/ContactModule';
import OfferingsModule from './OfferingsModule';

const HomePage = () => {
  const LoungeModule1 = (
    <div className="flex flex-col px-4 w-full">
      <h2 className="font-MonteCarlo text-6xl">Smoking Lounge</h2>
      <div className="border-t border-slate-400 mt-0">&nbsp;</div>
      <p className="font-Baskerville text-xl mt-2 pl-6 leading-relaxed pb-6 md:pb-0">
        Step into a world of refined comfort where rich leather chairs, smooth
        jazz, and the warm glow of aged wood set the stage for meaningful
        conversation and camaraderie. Whether you're savoring a fine cigar or
        exploring new blends, our smoking lounge offers a sophisticated retreat
        for those who appreciate quality and&nbsp;connection.
      </p>
    </div>
  );
  const LoungeModule2 = (
    <div className="flex w-full items-center justify-center">
      <img
        className="w-full rounded-xl max-w-96"
        src="/i/smoking-lounge.png"
        alt="Smoking Lounge"
      />
    </div>
  );

  const SelectionModule1 = (
    <div className="flex flex-col sm:ml-6 w-full">
      <h2 className="font-MonteCarlo text-6xl">For All Tastes</h2>
      <div className="border-t border-slate-400 mt-0">&nbsp;</div>
      <p className="font-Baskerville text-xl mt-2 pl-6 leading-relaxed pb-6 md:pb-0">
        With the largest selection of cigars in California, you’ll be sure to
        find what you’re looking for and discover new favorites. Whether you’re
        a longtime aficionado or just getting started, our team is always ready
        to help you explore, learn, and enjoy.
      </p>
    </div>
  );
  const SelectionModule2 = (
    <div className="flex w-full items-center justify-center overflow-hidden rounded-xl">
      <img
        className="w-full transform transition-transform duration-300 
      hover:scale-110 origin-center"
        src="/i/wall-of-cigars-1.jpg"
        alt="Cigar wall"
      />
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ContactModule />
      <div className="flex flex-col justify-center items-center">
        <section className="flex justify-center items-center w-full md:w-3/4 pt-12">
          <TwoColumn
            module1={LoungeModule1}
            module2={LoungeModule2}
            dir="ltr"
            containerClasses=""
          />
        </section>
        <section className="flex justify-center items-center w-full md:w-3/4 pt-18 px-4">
          <TwoColumn
            module1={SelectionModule1}
            module2={SelectionModule2}
            dir="rtl"
            containerClasses=""
          />
        </section>
      </div>
      <section className="flex w-full flex-col justify-center items-center mt-12 py-12 bg-slate-100">
        <div className="w-full md:w-3/4">
          <h2 className="font-MonteCarlo text-6xl px-4">
            First class experience
          </h2>
        </div>
        <div className="w-full p-4">
          <div className="mt-6">
            <OfferingsModule />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
