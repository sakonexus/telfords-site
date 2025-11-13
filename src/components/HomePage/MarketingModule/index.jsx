import React from 'react';

const MarketingModule = ({ children }) => {
  return (
    <div className="flex flex-col shadow-sm border-neutral-400 bg-white sm:w-1/2 rounded-md sm:p-8 xs:p-4 xs:w-full">
      {children}
    </div>
  );
};

export default MarketingModule;
