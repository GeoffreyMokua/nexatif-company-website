import React from 'react';
import Container from 'react-bootstrap/Container';

import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';
import Button from '../component/button/button';

function ElementsButton() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Button"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Button', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <SectionTitle extraClass="mb-0" title="Primary Button" />
                </div>
                <div className="col">
                  <div className="row gx-2 text-center">
                    <div className="col">
                      <Button />
                    </div>
                    <div className="col">
                      <Button btnText="Get A Quote" />
                    </div>
                    <div className="col">
                      <Button btnText="Case Study Page" btnURL="/case-study" />
                    </div>
                  </div>
                  <div className="row mt-5 gx-2 text-center">
                    <div className="col">
                      <Button btnClass="btn-primary-round" />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="btn-primary-round"
                        btnText="Get A Quote"
                      />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="btn-primary-round"
                        btnText="Case Study Page"
                        btnURL="/case-study"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-5 mb-5">
                <div className="col-sm-4">
                  <SectionTitle extraClass="mb-0" title="Secondary Button" />
                </div>
                <div className="col">
                  <div className="row gx-2 text-center">
                    <div className="col">
                      <Button btnClass="btn-secondary" />
                    </div>
                    <div className="col">
                      <Button btnClass="btn-secondary" btnText="Get A Quote" />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="btn-secondary"
                        btnText="Case Study Page"
                        btnURL="/case-study"
                      />
                    </div>
                  </div>
                  <div className="row mt-5 gx-2 text-center">
                    <div className="col">
                      <Button btnClass="btn-secondary-round" />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="btn-secondary-round"
                        btnText="Get A Quote"
                      />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="btn-secondary-round"
                        btnText="Case Study Page"
                        btnURL="/case-study"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-5 mb-5">
                <div className="col-sm-4">
                  <SectionTitle extraClass="mb-0" title="Light Button" />
                </div>
                <div className="col">
                  <div className="row gx-2 text-center">
                    <div className="col">
                      <Button btnClass="btn-light" />
                    </div>
                    <div className="col">
                      <Button btnClass="btn-light" btnText="Get A Quote" />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="btn-light"
                        btnText="Case Study Page"
                        btnURL="/case-study"
                      />
                    </div>
                  </div>
                  <div className="row mt-5 gx-2 text-center">
                    <div className="col">
                      <Button btnClass="btn-light-round" />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="btn-light-round"
                        btnText="Get A Quote"
                      />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="btn-light-round"
                        btnText="Case Study Page"
                        btnURL="/case-study"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-5">
                <div className="col-sm-4">
                  <SectionTitle extraClass="mb-0" title="Normal Link" />
                </div>
                <div className="col">
                  <div className="row gx-2 text-center">
                    <div className="col">
                      <Button btnClass="btn-link link-light" />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="btn-link link-primary"
                        btnText="Get A Quote"
                      />
                    </div>
                    <div className="col">
                      <Button
                        btnClass="btn-link link-secondary"
                        btnText="Case Study Page"
                        btnURL="/case-study"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsButton;
