import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Autoplay,
  Navigation,
  A11y,
  Thumbs,
  Grid,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from '@components/Modal';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

const GalleryModule = ({
  imagesArray,
  slidesPerView = 3,
  autoplay = true,
  gridView = false,
  showExpandIcon = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);

  const rowCount = useMemo(() => {
    if (!imagesArray?.length) return 1;
    return Math.ceil(imagesArray.length / slidesPerView);
  }, [imagesArray, slidesPerView]);

  const imageSelect = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  // Pause autoplay on main Swiper when modal is open
  useEffect(() => {
    if (!mainSwiperRef.current) return;
    if (isOpen) mainSwiperRef.current.autoplay.stop();
    else if (autoplay) mainSwiperRef.current.autoplay.start();
  }, [isOpen]);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex w-full justify-center items-center">
        <Swiper
          modules={[Autoplay, Navigation, A11y, Grid, Pagination]}
          grid={{
            rows: gridView ? rowCount : 1,
            fill: 'row',
          }}
          autoplay={
            autoplay ? { delay: 3000, disableOnInteraction: false } : false
          }
          loop={true}
          navigation={false}
          slidesPerView={slidesPerView}
          spaceBetween={25}
          speed={600}
          className="flex w-full h-full rounded-md justify-center items-center"
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
              grid: {
                rows: 1,
              },
              autoplay: true,
            },
            640: {
              slidesPerView: slidesPerView,
              spaceBetween: 25,
            },
          }}
        >
          {imagesArray.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              {showExpandIcon ? (
                <div className="absolute bottom-2 right-2 z-20">
                  <div
                    onClick={() => imageSelect(index)}
                    className="relative bg-black/50 p-1 rounded-md"
                  >
                    <ArrowsPointingOutIcon className="w-8 stroke-cream hover:cursor-pointer" />
                  </div>
                </div>
              ) : null}

              <img
                src={slide.src}
                alt={slide.alt}
                onClick={() => imageSelect(index)}
                className="w-full h-full object-cover max-h-full rounded-md cursor-pointer"
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
            {imagesArray.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-contain rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Navigation, A11y, Thumbs, Grid]}
            watchSlidesProgress
            slidesPerView={5}
            spaceBetween={10}
            grid={{
              rows: gridView ? rowCount : 1,
              fill: 'row',
            }}
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
            {imagesArray.map((slide, index) => (
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

export default GalleryModule;
