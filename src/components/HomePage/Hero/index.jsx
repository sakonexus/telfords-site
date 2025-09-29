import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  const slides = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1756142754703-1c24f2d1fe9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Slide 1',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1646926551564-8d0444541d78?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Slide 2',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1601040629814-2d86fbbcd14d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Slide 3',
    },
  ];

  return (
    <div className="relative w-full h-[100vh] xxs:max-h-[50vh] xs:max-h-[60vh] sm:max-h-[80vh]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        loop={true}
        slidesPerView={1}
        speed={500}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover max-h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/40">
        <div className="relative w-full flex justify-center items-center px-4 flex-col">
          <svg
            viewBox="0 0 900 600"
            preserveAspectRatio="xMidYMid meet"
            className="w-full max-h-[60vh]"
          >
            <path
              id="curve"
              d="M 50 300 C 250 70 650 70 850 300"
              fill="none"
              stroke="none"
              strokeMiterlimit="10"
              transform="translate(0,100)"
            />
            <text
              className="font-DM-Serif text-[10rem]"
              fill="white"
              textAnchor="middle"
            >
              <textPath href="#curve" startOffset="50%">
                TELFORD&rsquo;S
              </textPath>
            </text>

            <text
              x="450"
              y="380"
              fill="white"
              fontSize="58"
              textAnchor="middle"
              className="text-7xl font-Baskerville"
            >
              Pipe & Cigar, <tspan fontSize="46">inc.</tspan>
            </text>
            <text
              x="450"
              y="450"
              fill="white"
              fontSize="22"
              textAnchor="middle"
              className="text-5xl font-Baskerville"
            >
              Est. 1970
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
