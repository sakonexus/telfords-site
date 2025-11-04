import React from 'react';

const LoadingSpinner = () => {
  return (
    <div class="pipe-spinner">
      <div class="pipe">
        <div class="bowl"></div>
        <div class="stem"></div>
      </div>
      <div class="smoke smoke1"></div>
      <div class="smoke smoke2"></div>
      <div class="smoke smoke3"></div>
    </div>
  );
};

export default LoadingSpinner;
