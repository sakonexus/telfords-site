import React from 'react';
import YelpLogo from '@assets/review/yelp_logo.svg?url';
import GoogleLogo from '@assets/review/google-logo.svg?url';
import ReviewContent from './ReviewContent';

const reviewSiteData = [
  {
    name: 'Google',
    url: "https://www.google.com/maps/place/Telford's+Pipe+%26+Cigar/@37.8916338,-122.518484,17z/data=!4m8!3m7!1s0x80859ab5f9ec27b5:0xde2649a7d676aca2!8m2!3d37.8916296!4d-122.5159037!9m1!1b1!16s%2Fg%2F1v7tlm0j",
    rating: '4.7',
    numReviews: '130',
    logo: GoogleLogo,
  },
  {
    name: 'Google',
    url: 'https://www.yelp.com/biz/telfords-pipe-and-cigar-mill-valley',
    rating: '4.5',
    numReviews: '80',
    logo: YelpLogo,
  },
];

const BusinessReview = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex md:flex-row gap-x-6 items-center sm:px-0 xs:px-4">
        {reviewSiteData.map((reviewSite) => {
          return (
            <div className="flex flex-col sm:w-fit p-4 bg-white rounded-md shadow-sm hover:bg-slate-50 transition-all duration-200 xs:items-stretch xs:w-full">
              <a target="_blank" href={reviewSite.url}>
                <img
                  className="sm:w-28 rounded-md xs:w-18"
                  src={reviewSite.logo}
                />

                <div className="flex sm:flex-row pt-2 xs:flex-col xs:gap-y-2">
                  <div className="flex flex-row">
                    <p className="sm:text-lg xs:text-md">{reviewSite.rating}</p>
                    &nbsp;
                    <p className="text-yellow-500 sm:text-xl xs:text-md">
                      ★★★★⯪
                    </p>
                  </div>
                  <p className="sm:ml-2 sm:text-lg underline xs:text-md xs:ml-0">
                    {reviewSite.numReviews}+&nbsp;reviews
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="pt-6 sm:px-0 xs:px-4">
        <ReviewContent />
      </div>
    </div>
  );
};

export default BusinessReview;
