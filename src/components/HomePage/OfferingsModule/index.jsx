import React, { useState, useRef, useEffect } from 'react';
import { Autoplay, Navigation, A11y, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from '@components/Modal';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

const OfferingsModule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      src: '/i/home-gallery/davidoff-cabinet-angle-1.JPG',
      alt: 'Davidoff cigar cabinet',
    },
    {
      id: 2,
      src: '/i/home-gallery/placsncia-cigars.JPG',
      alt: 'Plasencia cigars',
    },
    {
      id: 3,
      src: '/i/home-gallery/pipe-wall-angle.JPG',
      alt: 'Pipe wall',
    },
    {
      id: 4,
      src: '/i/home-gallery/pipe-tobacco-angle-1.JPG',
      alt: 'Pipe wall',
    },
    {
      id: 5,
      src: '/i/home-gallery/cigar-cabinet-angle-1.JPG',
      alt: 'Cigar cabinet wall',
    },
  ];

  const imageSelect = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  // Pause autoplay on main Swiper when modal is open
  useEffect(() => {
    if (!mainSwiperRef.current) return;
    if (isOpen) mainSwiperRef.current.autoplay.stop();
    else mainSwiperRef.current.autoplay.start();
  }, [isOpen]);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-full">
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={3}
          spaceBetween={25}
          speed={600}
          className="w-full h-full rounded-xl"
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="absolute bottom-2 right-2 z-20">
                <div
                  onClick={() => imageSelect(index)}
                  className="relative bg-black/50 p-1 rounded-lg"
                >
                  <ArrowsPointingOutIcon className="w-8 stroke-cream hover:cursor-pointer" />
                </div>
              </div>
              <img
                src={slide.src}
                alt={slide.alt}
                onClick={() => imageSelect(index)}
                className="w-full h-full object-cover max-h-full rounded-xl cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col justify-center items-center w-full px-4 sm:px-0">
          <Swiper
            modules={[A11y, Thumbs]}
            navigation
            loop={true}
            slidesPerView={1}
            speed={600}
            spaceBetween={10}
            className="w-full"
            initialSlide={selectedImageIndex}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-contain rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Navigation, A11y, Thumbs]}
            watchSlidesProgress
            slidesPerView={5}
            spaceBetween={10}
            className="w-full mt-12"
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100 transition-opacity hover:cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Modal>
    </div>
  );
};

export default OfferingsModule;
