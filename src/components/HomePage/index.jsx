import React from 'react';
import Hero from './Hero';
import TwoColumn from '@components/TwoColumn';
import ContactModule from '@components/HomePage/ContactModule';
import GalleryModule from '@components/GalleryModule';
import Headline from '@components/Headline';
import BusinessReview from '@components/BusinessReview';
import Navbar from '@components/NavBar';
import MarketingModule from './MarketingModule';
import PipeClubImg from '@assets/home/pipe-club.jpg?url';
import MembershipImg1 from '@assets/home/membership-1.jpg?url';
import MembershipImg2 from '@assets/home/membership-2.jpg?url';
import RewardsCardImg from '@assets/home/vip-rewards-card.png?url';
import NewsletterSignUp from '@components/NewsletterSignUp';

const HomePage = ({
  heroImgs,
  homeImgs,
  homeGallery,
  historicImages,
  logoImage,
}) => {
  const LoungeModule1 = (
    <div className="flex flex-col px-4 w-full md:mr-10 xs:mr-0 xs:px-4">
      <Headline>Smoking Lounge</Headline>
      <div className="border-t border-slate-400 mt-0">&nbsp;</div>
      <p className="font-Lora sm:text-xl sm:mt-2 pl-6 leading-relaxed pb-6 md:pb-0 xs:text-md xs:mt-0">
        Step into a world of refined comfort where rich leather chairs, smooth
        jazz, and the warm glow of aged wood set the stage for meaningful
        conversation and camaraderie. Access to our smoking lounge is available{' '}
        <span className="underline">exclusively with a membership</span>,
        offering a sophisticated retreat for savoring fine cigars, exploring new
        blends, and connecting with others who appreciate quality
        and&nbsp;connection.
      </p>
    </div>
  );
  const LoungeModule2 = (
    <div className="flex w-full items-center justify-center overflow-hidden rounded-md md:px-0 xs:px-4">
      <img
        className="w-full h-full object-cover transform transition-transform duration-300 md:hover:scale-110 origin-center rounded-md xs:hover:scale-100"
        src={homeImgs[1].src}
        alt="Smoking Lounge"
      />
    </div>
  );

  const SelectionModule1 = (
    <div className="flex flex-col md:ml-10 px-4 w-full xs:px-4">
      <Headline>For All Tastes</Headline>
      <div className="border-t border-slate-400 mt-0">&nbsp;</div>
      <p className="font-Lora sm:text-xl sm:mt-2 pl-6 leading-relaxed pb-6 md:pb-0 xs:text-md xs:mt-0">
        With the largest selection of cigars in California, you’ll be sure to
        find what you’re looking for and discover new favorites. Whether you’re
        a longtime aficionado or just getting started, our team is always ready
        to help you explore, learn, and enjoy.
      </p>
    </div>
  );
  const SelectionModule2 = (
    <div className="flex w-full items-center justify-center overflow-hidden rounded-md md:px-0 xs:px-4">
      <img
        className="w-full h-full object-cover transform transition-transform duration-300 md:hover:scale-110 origin-center rounded-md xs:hover:scale-100"
        src={homeImgs[0].src}
        alt="Cigar wall"
      />
    </div>
  );

  const MarketingModule1 = (
    <div className="w-full flex flex-col">
      <h2 className="font-Lora text-text-primary text-3xl">
        Cabinet & Lounge&nbsp;Membership
      </h2>
      <p className="text-md text-text-primary mt-4">
        Members enjoy exclusive access to our private lounge — a comfortable
        space with your own humidified cabinet next to our cozy leather seating
        by the fireplace. You’ll also receive special pricing on cigars and
        accessories, early access to rare releases, and shared privileges with
        partner lounges across the&nbsp;country.
      </p>
      <a
        href="/membership"
        aria-label="Explore Club Membership"
        className="underline sm:text-xl sm:mt-8 xs:mt-6 xs:text-lg text-text-primary"
      >
        Explore&nbsp;Club&nbsp;Membership
      </a>
      <div className="w-full flex flex-row justify-between md:mt-14 xs:mt-8 gap-x-4">
        <div className="relative w-full">
          <img
            src={MembershipImg1}
            alt="Lounge Member"
            className="rounded-md object-cover w-full aspect-[4/3]"
          />
        </div>
        <div className="relative w-full">
          <img
            src={MembershipImg2}
            alt="Lounge Member"
            className="rounded-md object-cover [object-position:50%_30%] w-full aspect-[4/3]"
          />
        </div>
      </div>
    </div>
  );
  const MarketingModule2 = (
    <div className="w-full flex flex-col">
      <h2 className="font-Lora text-text-primary text-3xl">
        Golden Gate Pipe Club
      </h2>
      <p className="text-md text-text-primary mt-4">
        Come join the camaraderie as we enjoy friendship, pipe lore, and
        fine&nbsp;tobacco.
      </p>
      <p className="text-lg mt-4 text-text-primary">
        <strong>Date:</strong> 2nd&nbsp;Sunday of every month
        <br />
        <strong>Time:</strong> 6:30 PM - 8:00 PM
      </p>
      <img
        className="w-full mt-4 rounded-md"
        src={PipeClubImg}
        alt="Pipe Club members enjoying themselves"
      />
    </div>
  );

  const RewardsModule1 = (
    <div className="w-full">
      <h2 className="font-Lora text-3xl text-text-primary">
        Become a VIP Rewards&nbsp;Member
      </h2>
      <p className="text-lg mt-4">
        Join the Telford’s VIP Reward program and enjoy savings every time you
        shop. Stop by today to claim your card and start earning&nbsp;rewards.
      </p>
    </div>
  );

  const RewardsModule2 = (
    <div className="w-full flex items-center justify-center sm:ml-12 xs:ml-0 xs:mt-8">
      <img src={RewardsCardImg} className="rounded-lg sm:w-full xs:w-72" />
    </div>
  );

  return (
    <div className="w-full">
      <Navbar logoImg={logoImage} homePage={true} />
      <div className="flex flex-col w-full justify-center items-center bg-cream">
        <Hero heroImgs={heroImgs} />
        <div className="flex flex-col w-full items-center">
          <div className="bg-section w-full">
            <ContactModule />
          </div>
          <div className="flex flex-col justify-center items-center">
            <section className="flex justify-center items-center w-full sm:pt-24 max-w-6xl xs:pt-12">
              <TwoColumn
                module1={LoungeModule1}
                module2={LoungeModule2}
                dir="ltr"
                containerClasses=""
              />
            </section>
            <section className="w-full flex flex-col justify-center items-center py-12 mt-4">
              <Headline>Join the Community</Headline>
              <div className="w-full flex sm:flex-row max-w-6xl justify-between sm:gap-x-10 xs:flex-col xs:gap-y-8 xs:px-4 mt-10">
                <MarketingModule>{MarketingModule1}</MarketingModule>
                <MarketingModule>{MarketingModule2}</MarketingModule>
              </div>
            </section>
            <section className="flex justify-center items-center w-full sm:pt-12 max-w-6xl xs:pt-4">
              <TwoColumn
                module1={SelectionModule1}
                module2={SelectionModule2}
                dir="rtl"
                containerClasses=""
              />
            </section>
          </div>
          <section className="w-full bg-section flex justify-center py-12 mt-12">
            <div className="w-full flex sm:flex-row max-w-2xl sm:px-0 xs:px-4">
              <TwoColumn
                module1={RewardsModule1}
                module2={RewardsModule2}
                dir="ltr"
                containerClasses=""
              />
            </div>
          </section>
          <section className="flex flex-col justify-center items-center md:text-center xs:text-left w-full sm:mt-24 max-w-6xl md:px-0 xs:px-4 xs:mt-12">
            <div className="flex flex-col md:items-center xs:items-start">
              <Headline>
                Experience the <br className="md:hidden xs:block" />
                Heritage of&nbsp;Tobacco
              </Headline>
              <div className="border-t border-slate-400 mt-0 md:w-2/3 xs:w-full">
                &nbsp;
              </div>
              <p className="font-Lora sm:text-xl sm:mt-2 xs:pl-0 md:pl-6 leading-relaxed pb-6 md:pb-0 md:ml-0 xs:ml-6 xs:text-md xs:mt-0">
                Our shop is home to a collection of historic pipes, cigars, and
                tobacco accessories, each telling a story of craftsmanship,
                tradition, and refinement. From rare vintage pieces to iconic
                designs that have shaped the industry, every item on display
                offers a glimpse into the rich legacy of tobacco culture.
                Explore these treasures and experience the heritage that
                continues to inspire collectors and enthusiasts&nbsp;alike.
              </p>
            </div>
            <div className="flex w-full mt-8 sm:mb-24 xs:mb-12">
              <GalleryModule
                imagesArray={historicImages}
                slidesPerView={2}
                singleRow
              />
            </div>
          </section>
          <div className="justify-center flex w-full bg-section sm:py-18 xs:py-12">
            <div className="w-full max-w-6xl justify-center">
              <BusinessReview />
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <section className="flex w-full flex-col justify-center items-center pt-12 pb-12 max-w-6xl md:px-0 xs:px-4">
              <div className="w-full">
                <Headline>Tradition of Excellence</Headline>
              </div>
              <div className="w-full">
                <div className="mt-6">
                  <GalleryModule imagesArray={homeGallery} singleRow />
                </div>
              </div>
            </section>
          </div>
          <div className="bg-section w-full flex flex-col items-center">
            <section className="flex w-full flex-col justify-center items-center pb-12 max-w-6xl md:px-0 xs:px-4">
              <NewsletterSignUp />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
