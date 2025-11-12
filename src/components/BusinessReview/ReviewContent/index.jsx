import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import GoogleIcon from '@assets/review/google-icon.svg?url';
import YelpIcon from '@assets/review/yelp-icon.svg?url';

const allReviews = [
  {
    name: 'Hans Strong',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjXehTCElgIGMlRo5tk9eeXMc5jPq6Vu50TuJC-mAd66d-NvvNNG=s64-c-rp-mo-ba2-br100',
    stars: 5,
    text: 'This place is amazing. They have been in Marin for over 50 years and their selection is top notch...',
    site: 'google',
  },
  {
    name: 'Jerome R.',
    image:
      'https://s3-media0.fl.yelpcdn.com/photo/FQovezCRFIHvogQgw56cVQ/60s.jpg',
    stars: 5,
    text: 'So seriously, this is 5 Star on selections of Cigars. Also, 5 stars on the two people I talked to...',
    site: 'yelp',
  },
  {
    name: 'Brian Bailey',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjVrsgkQjFeEhyhTHZmGdrjGto8rTGsdwLUDxWo0ocK2D0Wd6xzH=s64-c-rp-mo-ba2-br100',
    stars: 5,
    text: 'One stop shop for the tobacco connoisseur. Excellent impeccable selection...',
    site: 'google',
  },
  {
    name: 'Ian M.',
    image:
      'https://s3-media0.fl.yelpcdn.com/photo/IcBKYJp7gR39dPuyWEZ7dA/60s.jpg',
    stars: 5,
    text: 'One stop shop for the tobacco connoisseur. Excellent impeccable selection...',
    site: 'yelp',
  },
  {
    name: 'Matthew Forsyth',
    image: '',
    stars: 5,
    text: 'Well stocked place, great cigars and a nice spot outside to relax...',
    site: 'google',
  },
  {
    name: 'Zachary K.',
    image:
      'https://s3-media0.fl.yelpcdn.com/photo/ESM6HUWX2XSSmp51_uRqTg/60s.jpg',
    stars: 5,
    text: 'I walked in on a random Wednesday and was speechless with how amazing their selection of pipes and pipe tobacco was...',
    site: 'yelp',
  },
  {
    name: 'Aaron Dinga',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjXXoUgDz7gZOaWthJ2sajI0pTIebQWyBhpjQR4shqY8stLcalLi=s64-c-rp-mo-ba2-br100',
    stars: 5,
    text: "This place is the best. I used to enjoy a pipe in college so I stopped by Telford's...",
    site: 'google',
  },
  {
    name: 'Kalani F.',
    image:
      'https://s3-media0.fl.yelpcdn.com/photo/b9_u6vwcKT-t7PNyFJEMzQ/60s.jpg',
    stars: 5,
    text: 'Great customer service!!! They been in business since the 70s and still up and running strong...',
    site: 'yelp',
  },
  {
    name: 'Gene Bantay',
    image: '',
    stars: 5,
    text: 'Outstanding. The selections. The merchandise. The decor...',
    site: 'google',
  },
];

const ReviewContent = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={false}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      loop={true}
      className="pb-10"
    >
      {allReviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="p-4 border border-gray-200 rounded-md shadow-sm bg-white h-full flex flex-col">
            <div className="pt-4 pr-4 absolute top-0 right-0">
              <img
                src={`${review.site === 'google' ? GoogleIcon : YelpIcon}`}
                className="w-6"
              />
            </div>
            <div className="flex items-center space-x-4 mb-2">
              {review.image ? (
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center ">
                  <p className="text-xl text-white font-semibold">
                    {review.name.charAt(0).toUpperCase()}
                  </p>
                </div>
              )}
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-yellow-500">{'★'.repeat(review.stars)}</p>
              </div>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewContent;
