import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="pipe-spinner">
      <div className="pipe">
        <div className="bowl"></div>
        <div className="stem"></div>
      </div>
      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>
      <div className="smoke smoke3"></div>
    </div>
  );
};

export default LoadingSpinner;
