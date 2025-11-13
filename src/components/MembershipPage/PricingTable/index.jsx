import React from 'react';

const pricingPlans = [
  {
    title: 'Annual',
    price: '$700',
    body: 'Perfect for regulars who frequent their home-away-from-home',
  },
  {
    title: 'Monthly',
    price: '$70',
    body: 'For your convenience',
  },
  {
    title: 'Daily',
    price: 'FREE*',
    body: '*With a minimum purchase of $35',
  },
];

const PricingTable = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-white rounded-md shadow-dm hover:shadow-lg transition-shadow border border-neutral-300"
          >
            <h3 className="text-2xl font-bold mb-4 font-Lora">{plan.title}</h3>
            <p className="text-4xl font-extrabold mb-6 text-text-primary">
              {plan.price}
            </p>
            <p className="text-text-primary sm:px-0 xs:px-6">{plan.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
