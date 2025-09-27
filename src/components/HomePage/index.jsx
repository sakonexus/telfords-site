import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hero from './Hero';
import { PhoneIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import TwoColumn from '@components/TwoColumn';

const HomePage = () => {
  const Module1 = (
    <div>
      <p>test</p>
    </div>
  );
  const Module2 = (
    <div>
      <p>test 2</p>
    </div>
  );

  return (
    <div className="flex flex-col">
      <Hero />
      <div className="flex flex-col items-center text-center py-12 px-4 bg-slate-100">
        <a
          target="_blank"
          href="https://maps.app.goo.gl/Rn2Woi6tL7kBUgwQ6"
          className="bg-white p-4 rounded-full border border-gray-100 drop-shadow-md hover:cursor-pointer"
        >
          <BuildingStorefrontIcon className="w-8" />
        </a>
        <div className="flex flex-col items-center mt-4">
          <a
            target="_blank"
            href="https://maps.app.goo.gl/Rn2Woi6tL7kBUgwQ6"
            className="text-xl text-gray-900 tracking-wide underline xs:text-lg"
          >
            664 Redwood Highway Frontage Rd,
            <br />
            Mill Valley, CA 94941
          </a>
          <p className="mt-2 text-lg text-gray-900">
            Open every day from 10AM - 6PM
          </p>
          <p className="mt-1 text-sm text-gray-700">
            *Store hours may vary based on holidays
          </p>
        </div>

        <div className="flex flex-col items-center gap-y-4 text-center mt-8 px-8">
          <a
            href="tel:14153880440"
            className="bg-white p-4 rounded-full border border-gray-100 drop-shadow-md hover:cursor-pointer"
          >
            <PhoneIcon className="w-8" />
          </a>
          <a
            href="tel:14153880440"
            className="text-2xl text-gray-900 tracking-wide underline"
          >
            415-388-0440
          </a>
        </div>
      </div>
      <TwoColumn
        module1={Module1}
        module2={Module2}
        dir="ltr"
        mobileDir="ltr"
      />
    </div>
  );
};

export default HomePage;
