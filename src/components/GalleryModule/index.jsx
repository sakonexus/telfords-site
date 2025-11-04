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
import LoadingSpinner from '@components/LoadingSpinner';

const GalleryModule = ({
  imagesArray,
  slidesPerView = 3,
  autoplay = true,
  gridView = false,
  showExpandIcon = true,
  singleRow = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);
  const [initialized, setInitialized] = useState(false);

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
      {!initialized && <LoadingSpinner />}
      <div className="flex w-full justify-center items-center">
        <Swiper
          modules={[Autoplay, Navigation, A11y, Grid, Pagination]}
          onInit={() => setInitialized(true)}
          grid={{
            rows: gridView ? rowCount : 1,
            fill: 'row',
          }}
          autoplay={
            autoplay ? { delay: 3000, disableOnInteraction: false } : false
          }
          loop={true}
          autoHeight={false}
          navigation={false}
          slidesPerView={slidesPerView}
          spaceBetween={25}
          speed={600}
          className={`flex w-full h-full rounded-md justify-center items-center transform duration-300 ${
            !initialized ? 'opacity-0' : 'opacity-100'
          }`}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: slidesPerView - 1,
              spaceBetween: 10,
              grid: {
                rows: singleRow
                  ? 1
                  : Math.ceil(imagesArray.length / slidesPerView + 1),
              },
              autoplay: true,
            },
            640: {
              slidesPerView: slidesPerView,
              spaceBetween: 15,
              grid: {
                rows: singleRow
                  ? 1
                  : Math.ceil(imagesArray.length / slidesPerView + 1),
              },
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
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-center items-center w-full">
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
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex px-2">
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
              className="w-full my-4 px-4"
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
        </div>
      </Modal>
    </div>
  );
};

export default GalleryModule;
