import React from 'react';
import DavidoffCert from '@assets/davidoff-appointed-merchant.jpg?url';
import yelpIcon from '@assets/review/yelp-logo-white.svg?url';
import googleIcon from '@assets/review/google-logo-white.png?url';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col w-full bg-footer py-10 xs:px-4">
      <div className="mx-auto flex flex-col justify-between items-center gap-8 w-fulll">
        <div className="flex flex-col text-center justify-center items-center">
          <p className="text-xl font-semibold text-footer-text font-Lora">
            Telford&#8217;s Pipe & Cigar, Inc.
          </p>
          <p className="text-sm text-footer-text mt-2 font-Lora tracking-wide leading-relaxed">
            Marin County's largest tobacco provider for over 30&nbsp;years
          </p>
          <img
            alt="Davidoff Cigars Appointed Merchant"
            src={DavidoffCert}
            className="w-32 mt-4"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
          <a
            href="/"
            className="text-footer-text hover:text-hover-cream transition-colors"
            aria-label="Home page"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-footer-text hover:text-hover-cream transition-colors"
            aria-label="Our story"
          >
            Our story
          </a>
          <a
            href="/products"
            className="text-footer-text hover:text-hover-cream transition-colors"
            aria-label="Products"
          >
            Products
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end gap-5 text-xl">
          <a
            href="https://www.facebook.com/telfordspipeandcigar"
            className="hover:text-white transition-transform transform hover:scale-110"
            aria-label="Facebook"
          >
            <svg
              className="fill-cream w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/telfordspipeandcigar/"
            className="hover:text-white transition-transform transform hover:scale-110"
            aria-label="Instagram"
          >
            <svg
              className="fill-cream w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.yelp.com/biz/telfords-pipe-and-cigar-mill-valley"
            className="transition-transform transform hover:scale-110"
            aria-label="Yelp"
          >
            <img alt="Yelp icon" src={yelpIcon} className="w-8 fill-cream" />
          </a>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Telford's+Pipe+%26+Cigar/@37.8916338,-122.518484,17z/data=!4m8!3m7!1s0x80859ab5f9ec27b5:0xde2649a7d676aca2!8m2!3d37.8916296!4d-122.5159037!9m1!1b1!16s%2Fg%2F1v7tlm0j"
            className="transition-transform transform hover:scale-110"
            aria-label="Google"
          >
            <img
              alt="Google icon"
              src={googleIcon}
              className="w-8 fill-cream"
            />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center md:w-1/4 mt-10 border-t border-[#D9CCC1] pt-4 text-center text-sm text-footer-text w-full">
        <p>
          © {new Date().getFullYear()} Telford&#8217;s Pipe & Cigar, Inc.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
