import React from 'react';
import Button from '../../component/button/button';
import './pricing-table.scss';

function PricingTable(props) {
  return (
    <>
      {props.data.map((item, index) => (
        <div
          key={index}
          className={`pricing-table ${props.theme || ''} ${
            props.className || ''
          }${item.popular && item.popular.isPopular ? 'active' : ''}`}
        >
          <div className="pricing-header">
            <h4 className="pricing-title">{item.title || 'Basic'}</h4>
            <p>{item.content}</p>
          </div>
          <div className="pricing-price">
            <sup>{item.currency || '$'}</sup>
            <h3 className="price">{item.price}</h3>
            <span>/{item.period || 'month'}</span>
          </div>
          <div className="pricing-features">
            <ul className="features-list">
              {item.listItem.map((item, index) => (
                <li
                  key={index}
                  className={item.isActive ? 'active' : 'inactive'}
                >
                  {item.list}
                </li>
              ))}
            </ul>
          </div>
          <div className="pricing-button">
            <Button
              btnClass={props.btnStyle || item.btnStyle || 'btn-light-round'}
              btnURL={item.buttonLink}
              btnText={item.buttonTitle || 'Select Plan'}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default PricingTable;
