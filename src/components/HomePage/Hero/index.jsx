import { useEffect, useRef } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = ({ heroImgs }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Emit a custom event with section ID and visibility
        window.dispatchEvent(
          new CustomEvent('sectionVisible', {
            detail: { id: 'hero', visible: entry.isIntersecting },
          })
        );
      },
      { threshold: 0.1 } // Trigger when 0% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const slides = [
    {
      id: 1,
      src: heroImgs[0].src,
      alt: 'Cigar',
    },
    {
      id: 2,
      src: heroImgs[1].src,
      alt: 'Storefront',
    },
    {
      id: 3,
      src: heroImgs[2].src,
      alt: 'Wall of pipes',
    },
  ];

  return (
    <div
      ref={ref}
      className="relative w-full h-[100vh] xxs:max-h-[50vh] xs:max-h-[60vh] md:max-h-[80vh]"
    >
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

      <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/50">
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
              className="font-DM-Serif text-[10rem] fill-[var(--color-cream)]"
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
              className="text-7xl font-Baskerville fill-[var(--color-cream)]"
            >
              Pipe & Cigar, <tspan fontSize="46">inc.</tspan>
            </text>
            <text
              x="450"
              y="450"
              fill="white"
              fontSize="22"
              textAnchor="middle"
              className="text-5xl font-Baskerville fill-[var(--color-cream)]"
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
