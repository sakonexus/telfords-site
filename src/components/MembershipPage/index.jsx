import React from 'react';
import Headline from '@components/Headline';

const MembershipPage = () => {
  const listOfPerks = [
    'Private, climate-controlled humidor cabinet',
    'Personalized brass nameplate',
    'Exclusive members-only events',
    'Preferred pricing on cigars & accessories',
    'Handcrafted espresso, lattes, and cappuccinos',
    'Access to rare and limited releases',
    'Classic games: backgammon & chess',
  ];

  return (
    <section className="pb-12 flex w-full  justify-center">
      <div className="max-w-7xl px-4">
        <div className="mt-8">
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
          <table className="list-none ml-6 align-top pt-2">
            {listOfPerks.map((perk) => {
              return (
                <tr>
                  <td className="pt-2 align-top">&#9670;</td>
                  <td className="pt-2 pl-2 align-top">
                    <p className="text-md inline">{perk}</p>
                  </td>
                </tr>
              );
            })}
          </table>
          <p className="text-md pt-4">
            As added value, there is reciprocity to many other lounges & clubs
            where you can enjoy our partnership privileges, which include
            enjoying smoking&nbsp;indoors .
          </p>
        </div>
        <div className="mt-12">
          <h1 className="text-3xl font-Lora mb-4">Pricing</h1>
          <table cellPadding="0" cellSpacing="0" className="ml-4">
            <tr>
              <td className="w-18 text-right">
                <p className="text-xl">Annual:</p>
              </td>
              <td className="pl-4">
                <p className="text-lg">$700</p>
              </td>
            </tr>
            <tr>
              <td className="w-18 text-right pt-2">
                <p className="text-xl">Monthly:</p>
              </td>
              <td className="pt-2 pl-4">
                <p className="text-lg">$70</p>
              </td>
            </tr>
            <tr>
              <td className="w-18 text-right pt-2 align-top">
                <p className="text-xl">Daily:</p>
              </td>
              <td className="pt-2 pl-4 align-top">
                <p className="text-lg">
                  With a minimum purchase of <strong>$35</strong> you will
                  receive a <strong>FREE</strong>&nbsp;one-day&nbsp;pass
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MembershipPage;
