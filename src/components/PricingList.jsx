import React from 'react';

const samplePricing = [
  { id: 1, title: 'Basic Plan', description: 'This is a basic plan.', price: 10, features: ['Feature 1', 'Feature 2'] },
  { id: 2, title: 'Premium Plan', description: 'This is a premium plan.', price: 20, features: ['Feature A', 'Feature B'] },
];

const PricingList = () => {
  return (
    <div>
      {samplePricing.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <div>{item.price}</div>
          <ul>
            {item.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
