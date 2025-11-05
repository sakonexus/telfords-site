// src/components/ProductContent.jsx
import React from 'react';
import GalleryModule from '@components/GalleryModule';
import Headline from '@components/Headline';

export default function ProductContent({
  title,
  text,
  galleryImages,
  productPage = false,
}) {
  return (
    <div className="flex w-full justify-center items-center md:mt-20 xs:px-4 xs:mt-10">
      <div className="md:w-3/4 flex items-center justify-center xs:w-full">
        <div className="w-full">
          <div className="flex md:w-1/4 flex-col xs:w-full">
            <Headline>{title}</Headline>
            <div className="border-t border-slate-400 mt-0">&nbsp;</div>
          </div>
          <p className="mt-2 text-lg text-text-primary">{text}</p>
          <div className="mt-8 mb-24">
            <GalleryModule
              imagesArray={galleryImages}
              slidesPerView={productPage ? 4 : 3}
              autoplay={false}
              gridView={true}
              showExpandIcon={false}
              client:load
            />
          </div>
        </div>
      </div>
    </div>
  );
}
