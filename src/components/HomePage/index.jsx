import React from 'react';
import Hero from './Hero';
import TwoColumn from '@components/TwoColumn';
import ContactModule from '@components/HomePage/ContactModule';
import GalleryModule from '@components/GalleryModule';
import { homeGallery, historicImages } from '@data/gallery-images';

const HomePage = () => {
  const LoungeModule1 = (
    <div className="flex flex-col px-4 w-full sm:mr-10 xs:mr-0 xs:px-0">
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
    <div className="flex w-full items-center justify-center overflow-hidden rounded-md">
      <img
        className="w-full transform transition-transform duration-300 
      hover:scale-110 origin-center"
        src="/i/lounge-area-storage-boxes.JPG"
        alt="Smoking Lounge"
      />
    </div>
  );

  const SelectionModule1 = (
    <div className="flex flex-col sm:ml-10 px-4 w-full xs:px-0">
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
    <div className="flex w-full items-center justify-center overflow-hidden rounded-md">
      <img
        className="w-full transform transition-transform duration-300 
      hover:scale-110 origin-center"
        src="/i/wall-of-cigars-1.jpg"
        alt="Cigar wall"
      />
    </div>
  );

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Hero />
      <ContactModule />
      <div className="flex flex-col justify-center items-center">
        <section className="flex justify-center items-center w-full md:w-3/4 pt-12 px-4">
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
      <section className="flex flex-col justify-center items-center text-center w-full md:w-3/4 mt-18 px-4">
        <div className="flex flex-col">
          <h2 className="font-MonteCarlo text-6xl">
            Experience the Heritage of Tobacco
          </h2>
          <div className="border-t border-slate-400 mt-0">&nbsp;</div>
          <p className="font-Baskerville text-xl mt-4 xs:pl-0 md:pl-6 leading-relaxed pb-6 md:pb-0">
            Our shop is home to a curated collection of historic pipes, cigars,
            and tobacco accessories, each telling a story of craftsmanship,
            tradition, and refinement. From rare vintage pieces to iconic
            designs that have shaped the industry, every item on display offers
            a glimpse into the rich legacy of tobacco culture. Explore these
            treasures and experience the heritage that continues to inspire
            collectors and enthusiasts&nbsp;alike.
          </p>
        </div>
        <div className="flex w-full my-8">
          <GalleryModule imagesArray={historicImages} slidesPerView={2} />
        </div>
      </section>
      <section className="flex w-full flex-col justify-center items-center mt-12 py-12 bg-section">
        <div className="w-full md:w-3/4">
          <h2 className="font-MonteCarlo text-6xl px-4">
            First class experience
          </h2>
        </div>
        <div className="w-full p-4">
          <div className="mt-6">
            <GalleryModule imagesArray={homeGallery} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
