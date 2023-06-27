import React from "react";

const PriceCard = props => {
  const { title, price, features } = props.data;
  return (
    <div className="pricing-card">
      <header>
        <h3>{title}</h3>
        <div className="price">
          {price == 0 ? (
            <h4>
              <span className="odoo">F</span>ree
            </h4>
          ) : (
            <h4>
              $<span className="odoo">{price}</span>
            </h4>
          )}
        </div>
      </header>
      <div className="pricing-list">
        <ul>
          {features.map(feature => (
            <li>{feature}</li>
          ))}
        </ul>
        <a href="" className="blue-btn btn">
          Contact Sales
        </a>
      </div>
    </div>
  );
};
PriceCard.defaultProps = {
  data: {
    id: Date.now().toString(),
    title: "Title",
    price: 0,
    features: ["Slow", "Limited Storage", "No Support"]
  }
};
export default PriceCard;
