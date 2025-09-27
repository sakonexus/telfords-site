import React from 'react';

const TwoColumn = ({ module1, module2, dir, mobileDir }) => {
  return (
    <div className={`flex flex-row`}>
      <div className="order-1">{module1}</div>
      <div className="order-2">{module2}</div>
    </div>
  );
};

export default TwoColumn;
