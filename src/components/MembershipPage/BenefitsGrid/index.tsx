import React from 'react';

import CabinetIcon from '@assets/membership/benefits-icons/cabinet-icon.svg?url';
import NamePlateIcon from '@assets/membership/benefits-icons/nameplate-icon.png?url';
import EventIcon from '@assets/membership/benefits-icons/event-icon.svg?url';
import PricingIcon from '@assets/membership/benefits-icons/pricing-icon.svg?url';
import CoffeeIcon from '@assets/membership/benefits-icons/coffee-icon.png?url';
import ExclusiveIcon from '@assets/membership/benefits-icons/exclusive-icon.png?url';

const BenefitsGrid = () => {
  const benefitsArray = [
    {
      icon: CabinetIcon,
      title: 'Private On-site Humidor',
      body: 'Enjoy exclusive access to a climate-controlled humidor, keeping your collection in perfect condition.',
    },
    {
      icon: NamePlateIcon,
      title: 'Brass Nameplate',
      body: 'Personalize your experience with a custom brass nameplate, engraved just for you.',
    },
    {
      icon: EventIcon,
      title: 'Exclusive Events',
      body: 'Attend members-only gatherings featuring tastings, cigar pairings, and special presentations.',
    },
    {
      icon: PricingIcon,
      title: 'Preferred Pricing',
      body: 'Receive special discounts on premium cigars and select accessories.',
    },
    {
      icon: CoffeeIcon,
      title: 'Handcrafted Beverages',
      body: 'Savor fresh-brewed espresso, lattes, and cappuccinos while you relax.',
    },
    {
      icon: ExclusiveIcon,
      title: 'Limited Production',
      body: 'Gain access to rare, limited-edition cigars and one-of-a-kind releases.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {benefitsArray.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6"
          >
            <div className="sm:h-16 xs:h-14 flex items-center justify-center mb-4">
              <img src={benefit.icon} className="max-h-full w-auto" />
            </div>

            <h3 className="text-xl font-semibold mb-2 font-Lora">
              {benefit.title}
            </h3>
            <p className="text-text-primary">{benefit.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsGrid;
