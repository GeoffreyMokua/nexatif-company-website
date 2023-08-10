import React from 'react';
import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';
import Counter from '../component/counter/counter';

function ElementsCounter() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Counter"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Counter', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <SectionTitle extraClass="mb-5" title="Counter Grey" />
                </div>
                <div className="col-sm-3">
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="100"
                    countIcon="fa-brands fa-react"
                    countTitle="Happy Clients"
                  />
                </div>
                <div className="col-sm-3">
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="650"
                    countIcon="fa-brands fa-free-code-camp"
                    countTitle="Skilled Experts"
                  />
                </div>
                <div className="col-sm-3">
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="120"
                    countIcon="fa-brands fa-wpforms"
                    countTitle="Finished Projects"
                  />
                </div>
                <div className="col-sm-3">
                  <Counter
                    className="counter-grey"
                    countStart="0"
                    countEnd="120"
                    countIcon="fa-brands fa-wordpress-simple"
                    countTitle="Media Posts"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section-ptb bg-light">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <SectionTitle extraClass="mb-5" title="Counter with Icon" />
                </div>
                <div className="col-sm-3">
                  <Counter
                    countStart="0"
                    countEnd="150"
                    countIcon="flaticon-monitor"
                    countTitle="Happy Clients"
                  />
                </div>
                <div className="col-sm-3">
                  <Counter
                    countStart="0"
                    countEnd="1550"
                    countIcon="flaticon-mobile-phone"
                    countTitle="Skilled Experts"
                  />
                </div>
                <div className="col-sm-3">
                  <Counter
                    countStart="0"
                    countEnd="1020"
                    countIcon="flaticon-icon-253674"
                    countTitle="Finished Projects"
                  />
                </div>
                <div className="col-sm-3">
                  <Counter
                    countStart="0"
                    countEnd="520"
                    countIcon="flaticon-icon-149196"
                    countTitle="Media Posts"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section-ptb bg-secondary">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <SectionTitle
                    extraClass="section-title-light mb-5"
                    title="Counter Light"
                  />
                </div>
                <div className="col-sm-3">
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="100"
                    countIcon="fa-brands fa-react"
                    countTitle="Happy Clients"
                  />
                </div>
                <div className="col-sm-3">
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="650"
                    countIcon="fa-brands fa-free-code-camp"
                    countTitle="Skilled Experts"
                  />
                </div>
                <div className="col-sm-3">
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="120"
                    countIcon="fa-brands fa-wpforms"
                    countTitle="Finished Projects"
                  />
                </div>
                <div className="col-sm-3">
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="120"
                    countIcon="fa-brands fa-wordpress-simple"
                    countTitle="Media Posts"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section-ptb">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <SectionTitle extraClass="mb-5" title="Counter Light" />
                </div>
                <div className="col-sm-3 text-center">
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="100"
                    countTitle="Years of experience in IT service & solutions"
                  />
                </div>
                <div className="col-sm-3 text-center">
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="650"
                    countTitle="Leaders and the hard-working personalities"
                  />
                </div>
                <div className="col-sm-3 text-center">
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="120"
                    countTitle="Countries where we have satisfied customers"
                  />
                </div>
                <div className="col-sm-3 text-center">
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="120"
                    countTitle="Enterprise-class solutions & projects delivered"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsCounter;
