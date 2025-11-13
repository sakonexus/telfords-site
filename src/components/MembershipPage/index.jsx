import React from 'react';
import Headline from '@components/Headline';
import BenefitsGrid from './BenefitsGrid';
import PricingTable from './PricingTable';

const MembershipPage = () => {
  return (
    <section className="pb-12 flex w-full flex-col justify-center items-center">
      <div className="max-w-6xl px-4">
        <div className="my-8">
          <Headline>Cabinet & Lounge&nbsp;Membership</Headline>
          <div className="border-t border-slate-400 mt-0 sm:w-3/4 xs:w-full">
            &nbsp;
          </div>
          <p className="text-md">
            In addition to the camaraderie of spending time with old friends and
            fine cigars, and access to the exclusive smoking lounge, Telford's
            also offers Club Members a convivial atmosphere where you
            can&nbsp;enjoy:
          </p>

          <p className="text-md pt-4">
            As added value, there is reciprocity to many other lounges & clubs
            where you can enjoy our partnership privileges, which include
            enjoying smoking&nbsp;indoors .
          </p>
        </div>
      </div>
      <div className="w-full bg-section text-center">
        <h1 className="text-3xl font-Lora mt-12">Membership Benefits</h1>
        <BenefitsGrid />
      </div>
      <div className="max-w-6xl px-4 text-center">
        <h1 className="text-3xl font-Lora mt-12">Membership Pricing</h1>
        <PricingTable />
      </div>
    </section>
  );
};

export default MembershipPage;
