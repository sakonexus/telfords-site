import React from 'react';

const Headline = ({ children, tight = false }) => {
  return (
    <h1
      className={`font-MonteCarlo md:text-6xl xs:text-5xl ${
        tight && 'md:leading-none xs:leading-tight'
      }`}
    >
      {children}
    </h1>
  );
};

export default Headline;
