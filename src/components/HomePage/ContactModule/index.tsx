import React from 'react';
import { PhoneIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import TwoColumn from '@components/TwoColumn';
import Headline from '@components/Headline';

const ContactModule = () => {
  const Module1 = (
    <div className="flex flex-col w-full justify-center items-center max-w-12/12">
      <a
        target="_blank"
        href="https://maps.app.goo.gl/Rn2Woi6tL7kBUgwQ6"
        className="bg-white p-4 rounded-full border border-gray-100 drop-shadow-md hover:cursor-pointer w-fit"
      >
        <BuildingStorefrontIcon className="w-8" />
      </a>
      <div className="flex flex-col items-center mt-6">
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
    </div>
  );

  const Module2 = (
    <div className="flex flex-col w-full justify-start items-center gap-y-4 text-center px-8 pt-12 md:pt-0">
      <a
        href="tel:14153880440"
        className="bg-white p-4 rounded-full border border-gray-100 drop-shadow-md hover:cursor-pointer"
      >
        <PhoneIcon className="w-8" />
      </a>
      <a
        href="tel:14153880440"
        className="text-xl text-gray-900 tracking-wide underline pt-2"
      >
        415-388-0440
      </a>
    </div>
  );

  return (
    <div className="flex flex-col items-center text-center py-12 px-4 w-full">
      <Headline>Contact us</Headline>
      <div className="flex flex-col w-full md:max-w-2xl mt-12">
        <TwoColumn
          module1={Module1}
          module2={Module2}
          dir="ltr"
          containerClasses=""
        />
      </div>
    </div>
  );
};

export default ContactModule;
