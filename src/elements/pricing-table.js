import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tab, Tabs } from 'react-bootstrap';

import PageHeader from '../layouts/page-header/PageHeader';
import PricingTable from '../component/pricing-table/pricing-table';
import {
  planMonthly,
  planYearly,
  planBasic,
  planStandard,
  planProfessional,
} from '../data/pricing';

function ElementsPricingTable() {
  // Monthly Yearly Swith Class
  const [isActive, setIsActive] = useState('monthly');
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Pricing Table"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Pricing Table', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <div className="col">
                  <div className="pricing-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                    <PricingTable theme="pricing-style-1" data={planBasic} />
                    <PricingTable
                      theme="pricing-style-1"
                      data={planStandard}
                      className="active"
                      btnStyle="btn-primary-round"
                    />
                    <PricingTable
                      theme="pricing-style-1"
                      data={planProfessional}
                    />
                  </div>
                </div>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-light">
            <Container>
              <Row>
                <Col>
                  <div className="pricing-tab-switcher">
                    <nav className="pricing-tab">
                      <span className="pricing-title">Monthly </span>
                      <span
                        className={`pricing-switcher ${
                          isActive ? '' : 'active'
                        }`}
                        onClick={toggleClass}
                      ></span>
                      <span className="pricing-title">Yearly</span>
                    </nav>
                    <div
                      className={`pricing-tab-item ${
                        isActive ? 'monthly' : 'yearly'
                      }`}
                    >
                      <div className="pricing-monthly">
                        <div className="pricing-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                          <PricingTable data={planMonthly} />
                        </div>
                      </div>
                      <div className="pricing-yearly">
                        <div className="pricing-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                          <PricingTable data={planYearly} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <div className="pricing-tabs">
                    <Tabs defaultActiveKey="monthly">
                      <Tab eventKey="monthly" title="MONTHLY">
                        <div className="pricing-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                          <PricingTable
                            theme="pricing-style-1"
                            data={planMonthly}
                          />
                        </div>
                      </Tab>
                      <Tab eventKey="yearly" title="YEARLY">
                        <div className="pricing-wrapper grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                          <PricingTable
                            theme="pricing-style-1"
                            data={planYearly}
                          />
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsPricingTable;
