import React from 'react';

const MobileNavLink = ({ children, onClick, index, link }) => {
  return (
    <a
      aria-label={children + ' ' + 'link'}
      href={link}
      className={`text-text-primary transition-colors font-Bodina-Moda-SC text-lg ${
        index === 0 ? '' : 'border-t-gray-300 border-t pt-4'
      }`}
      onClick={() => onClick()}
    >
      {children}
    </a>
  );
};

export default MobileNavLink;
