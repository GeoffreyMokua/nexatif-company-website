import React from 'react';
import PageHeader from '../layouts/page-header/PageHeader';
import Countdown from '../component/countdown/countdown';

function ElementsCountdown() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Countdown"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Countdown', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <div className="container">
              <div className="row mb-5 align-items-center">
                <div className="col">
                  <h2 className="mb-0">Countdown Size : Large</h2>
                </div>
                <div className="col">
                  <Countdown size="size-lg" dateTime="12/31/2023" />
                </div>
              </div>
              <div className="row mb-5 align-items-center">
                <div className="col">
                  <h2 className="mb-0">Countdown Size : Medium</h2>
                </div>
                <div className="col">
                  <Countdown dateTime="11/31/2023" />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col">
                  <h2 className="mb-0">Countdown Size : Small</h2>
                </div>
                <div className="col">
                  <Countdown size="size-sm" dateTime="10/31/2023" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsCountdown;
