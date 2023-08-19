import React from 'react';

// Libraries
import Col from 'react-bootstrap/Col';

// Components
import FeatureInfo from '../../component/feature-info';
import Services from '../../component/services/services-item';

// Site Data
import aboutImage1 from '../../assets/images/blog/blog-img1.jpg';
import aboutImage2 from '../../assets/images/blog/blog-img2.jpg';
import aboutImage3 from '../../assets/images/blog/blog-img3.jpg';

function FeatureInfoSection() {
  return (
    <>
      <Col lg={4} md={6}>
        <FeatureInfo
          image={aboutImage1}
          title="Mission and vision"
          content="Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients' requirements and provide the best solutions."
          link="#"
        />
      </Col>
      <Col lg={4} md={6}>
        <FeatureInfo
          image={aboutImage2}
          title="Our challenges"
          content="We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
          link="/about-us"
        />
      </Col>
      <Col lg={4} md={6}>
        <FeatureInfo
          image={aboutImage3}
          title="Our team"
          content="Meet our leaders and the hard-working personalities who deliver innovative concepts to corporations like yours."
          link="/team"
        />
      </Col>
    </>
  );
}

export default FeatureInfoSection;
