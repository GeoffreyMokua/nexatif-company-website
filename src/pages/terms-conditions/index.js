import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionTitle from '../../component/section-title/section-title';

function TermsConditions() {
  return (
    <>
      <div className="site-content">
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <SectionTitle
                    extraClass="text-center mb-0"
                    tag="h1"
                    title="Terms and Conditions"
                    content="Please read these terms and conditions carefully before using www.hi-nex.com website operated by hi-Nex."
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-pb">
            <Container>
              <p className="mb-20">
                For those of you who are serious about having more, doing more,
                giving more and being more, success is achievable with some
                understanding of what to do, some discipline around planning and
                execution of those plans and belief that you can achieve your
                desires.
              </p>
              <h4 className="mt-4 text-primary">
                Conditions of use
              </h4>
              <p className="mb-20">
                By using this website, you certify that you have read and reviewed
                this Agreement and that you agree to comply with its terms. If you do not
                want to bound by the terms of this Agreement, you are advised to stop using the website
                accordingly. hi-Nex only grants use and access of this website, its products
                and its services to those who have accepted its terms.
              </p>
              <h4 className="mt-4 text-primary">Applicable law
              </h4>
              <p className="mb-20">
                By using this website, you agree that the laws of your country, without 
                regard to principles of conflict laws, will govern these terms and conditions
                or any dispute of any sort that might come between hi-Nex and you or
                its business partners and associates.

              </p>

              <h4 className="mt-4 text-primary">Age Restriction
              </h4>
              <p className="mb-20">

                You must be at least 18 (eighteen) years of age before you can use this website.
                By using this website, you warrant that you are at least 18 years of
                age and you may legally adhere to this Agreement. hi-Nex assumes
                no responsibility for liabilities related to age misrepresentation.
              </p>

              <h4 className="mt-4 text-primary">
                Disputes

              </h4>
              <p className='mb-20'>
                Any dispute related in any way to your use of this website or to products you purchase from
                us shall be arbitrated by state or federal court of your location and you consent to exclusive jurisdiction and venue of such courts.
              </p>

              <h4 className="mt-4 text-primary">
                Indemnification

              </h4>
              <p className='mb-20'>
                You agree to indemnify hi-Nex and its affiliates and hold hi-Nex harmless 
                against legal claims and demands that may arise from your use or misuse of our services.
                We reserve the right to select our own legal counsel. 
              </p>

              <h4 className="mt-4 text-primary">
                Limitation on liability

              </h4>
              <p className='mb-20'>
                hi-Nex is not liable for any damages that may occur to you as a result of your misuse of our website.
                hi-Nex reserves the right to edit, modify, and change this Agreement at any time.
                We shall let our users know of these changes through electronic mail. This Agreement is an understanding between
                hi-Nex and the user, and this supersedes and replaces all prior agreements regarding the use of this website.
              </p>




              <h4 className="mt-4 text-primary">
                User Account, Password, and Security
              </h4>
              <p className="mb-20">
                As a user of this website, you may be asked to register with us and provide information
                you are responsible for ensuring the accurracy of this information, and you are responsible
                for mantaining the safety and security of your identifying infromation. You
                are responsible for all activities that occur under your account or password.
              </p>
              <h4 className="mt-4 text-primary">Privacy policy</h4>
              <p className="mb-20">
                Before you continue using our website, we advise you to read our privacy policy
                regarding user data collection. It will help you better understand our practices.
              </p>
              <ul className="ps-3 mb-20 d-block">
                <li>Making a decision to do something</li>
                <li>
                  Focus is having the unwavering attention to complete what you
                  set out to do.
                </li>
                <li>Nothing changes until something moves</li>
                <li>Commit your decision to paper</li>
                <li>Execution is the single biggest factor in achievement</li>
              </ul>
              <h4 className="text-primary">Intellectual property</h4>
              <p className="mb-0">
                You agree that all materials, products, and services provided on this 
                website are property of hi-Nex its affiliates, directors, officers, employees
                agents, suppliers or licensors including copyrights, trade secrets, trademarks,
                patents, trade names, logos, designs, icons and other intellectual property.
                You grant hi-Nex a royalty-free, non-exclusive license to use, copy, modify and broadcast
                the content you upload and publish. For issues regarding intellectual property rights,
                you should contact the company in order to come to an agreement.
              </p>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default TermsConditions;
