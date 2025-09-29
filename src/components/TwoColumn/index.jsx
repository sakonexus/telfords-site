import React from 'react';

const TwoColumn = ({ module1, module2, dir, containerClasses }) => {
  return (
    <div
      className={`flex xs:flex-col md:flex-row w-full ${
        containerClasses && containerClasses
      }`}
    >
      <div
        className={`${dir == 'rtl' ? 'order-2 sm:order-1' : 'order-1'} w-full`}
      >
        {module1}
      </div>
      <div
        className={`${dir == 'rtl' ? 'order-1 sm:order-2' : 'order-2 '} w-full`}
      >
        {module2}
      </div>
    </div>
  );
};

export default TwoColumn;
