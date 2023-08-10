import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PricingTable from '../../component/pricing-table/pricing-table';
import { planMonthly, planYearly } from '../../data/pricing';

function PricingPlan() {
  // Monthly Yearly Swith Class
  const [isActive, setIsActive] = useState('monthly');
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Row>
        <Col>
          <div className="pricing-tab-switcher">
            <nav className="pricing-tab">
              <span className="pricing-title">Monthly </span>
              <span
                className={`pricing-switcher ${isActive ? '' : 'active'}`}
                onClick={toggleClass}
              ></span>
              <span className="pricing-title">Yearly</span>
            </nav>
            <div
              className={`pricing-tab-item ${isActive ? 'monthly' : 'yearly'}`}
            >
              <div className="pricing-monthly">
                <div className="pricing-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-1 grid-xs-1">
                  <PricingTable data={planMonthly} />
                </div>
              </div>
              <div className="pricing-yearly">
                <div className="pricing-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-1 grid-xs-1">
                  <PricingTable data={planYearly} />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default PricingPlan;
