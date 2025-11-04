import React from 'react';
import Hero from './Hero';
import TwoColumn from '@components/TwoColumn';
import ContactModule from '@components/HomePage/ContactModule';
import GalleryModule from '@components/GalleryModule';
import { homeGallery, historicImages } from '@data/gallery-images';
import Headline from '@components/Headline';

const HomePage = () => {
  const LoungeModule1 = (
    <div className="flex flex-col px-4 w-full md:mr-10 xs:mr-0 xs:px-4">
      <Headline>Smoking Lounge</Headline>
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
    <div className="flex w-full items-center justify-center overflow-hidden rounded-md md:px-0 xs:px-4">
      <img
        className="w-full h-full object-cover transform transition-transform duration-300 md:hover:scale-110 origin-center rounded-md xs:hover:scale-100"
        src="/i/lounge-area-storage-boxes.JPG"
        alt="Smoking Lounge"
      />
    </div>
  );

  const SelectionModule1 = (
    <div className="flex flex-col md:ml-10 px-4 w-full xs:px-4">
      <Headline>For All Tastes</Headline>
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
    <div className="flex w-full items-center justify-center overflow-hidden rounded-md md:px-0 xs:px-4">
      <img
        className="w-full h-full object-cover transform transition-transform duration-300 md:hover:scale-110 origin-center rounded-md xs:hover:scale-100"
        src="/i/wall-of-cigars-1.jpg"
        alt="Cigar wall"
      />
    </div>
  );

  return (
    <div className="flex flex-col w-full justify-center items-center bg-cream">
      <Hero />
      <div className="flex flex-col w-full items-center">
        <div className="bg-section w-full">
          <ContactModule />
        </div>
        <div className="flex flex-col justify-center items-center">
          <section className="flex justify-center items-center w-full pt-12 max-w-7xl">
            <TwoColumn
              module1={LoungeModule1}
              module2={LoungeModule2}
              dir="ltr"
              containerClasses=""
            />
          </section>
          <section className="flex justify-center items-center w-full pt-18 max-w-7xl">
            <TwoColumn
              module1={SelectionModule1}
              module2={SelectionModule2}
              dir="rtl"
              containerClasses=""
            />
          </section>
        </div>
        <section className="flex flex-col justify-center items-center md:text-center xs:text-left w-full mt-18 max-w-7xl md:px-0 xs:px-4">
          <div className="flex flex-col md:items-center xs:items-start">
            <Headline>
              Experience the <br className="md:hidden xs:block" />
              Heritage of&nbsp;Tobacco
            </Headline>
            <div className="border-t border-slate-400 mt-0 md:w-2/3 xs:w-full">
              &nbsp;
            </div>
            <p className="font-Baskerville text-xl mt-2 xs:pl-0 md:pl-6 leading-relaxed pb-6 md:pb-0 md:ml-0 xs:ml-6">
              Our shop is home to a curated collection of historic pipes,
              cigars, and tobacco accessories, each telling a story of
              craftsmanship, tradition, and refinement. From rare vintage pieces
              to iconic designs that have shaped the industry, every item on
              display offers a glimpse into the rich legacy of tobacco culture.
              Explore these treasures and experience the heritage that continues
              to inspire collectors and enthusiasts&nbsp;alike.
            </p>
          </div>
          <div className="flex w-full my-8">
            <GalleryModule
              imagesArray={historicImages}
              slidesPerView={2}
              singleRow
            />
          </div>
        </section>
        <div className="bg-section w-full flex flex-col items-center">
          <section className="flex w-full flex-col justify-center items-center pt-12 pb-24 max-w-7xl md:px-0 xs:px-4">
            <div className="w-full">
              <Headline>Tradition of Excellence</Headline>
            </div>
            <div className="w-full">
              <div className="mt-6">
                <GalleryModule imagesArray={homeGallery} singleRow />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
