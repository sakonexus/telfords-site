import React from 'react';
import TwoColumn from '@components/TwoColumn';

const AboutPage = () => {
  const Module2 = (
    <div className="flex flex-col ml-0 md:ml-8">
      <h1 className="font-MonteCarlo text-6xl">Our story</h1>
      <div className="border-t border-slate-400 mt-0">&nbsp;</div>
      <p className="font-Baskerville text-xl pt-4">
        Family owned and operated business from the start, Telford's Pipe &
        Cigar is one of the finest tobacco stores in the country. Serving the
        Bay Area since 1970.
      </p>
    </div>
  );

  const Module1 = (
    <div className="flex w-full items-center justify-center overflow-hidden rounded-xl">
      <img
        src="/i/telfords-mural.jpg"
        alt="Telford's Lounge Mural"
        className="w-full transform transition-transform duration-300 
      hover:scale-110 origin-center"
      />
    </div>
  );

  return (
    <div className="flex flex-col w-full justify-center items-center mt-20 mb-16">
      <div className="flex flex-col w-full text-left md:max-w-3/4 px-4 pb-8">
        <TwoColumn module1={Module1} module2={Module2} dir="ltr" />
      </div>
    </div>
  );
};

export default AboutPage;
