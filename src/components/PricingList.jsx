import React from 'react';
import Button from './Button';

const samplePricing = [
  { id: 1, title: 'Basic Plan', description: 'This is a basic plan.', price: 10, features: ['Feature 1', 'Feature 2'] },
  { id: 2, title: 'Premium Plan', description: 'This is a premium plan.', price: 20, features: ['Feature A', 'Feature B'] },
];

const PricingList = () => {
  return (
    <div className="pricing-list">
      {samplePricing.map(item => (
        <div key={item.id} className="pricing-item">
          <h4 className="pricing-title">{item.title}</h4>
          <p className="pricing-description">{item.description}</p>
          <div className="pricing-price">{item.price}</div>
          <Button href={item.price ? "/pricing" : "mailto:contact@example.com"}>
            {item.price ? "Get started" : "Contact us"}
          </Button>
          <ul className="pricing-features">
            {item.features.map((feature, index) => (
              <li key={index} className="pricing-feature">{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
