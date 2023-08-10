import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';
import ImageGallery from '../component/image-gallery';
import ImageGalleryList, { ImageGalleryList2 } from '../data/image-gallery';

function ElementsImageGallery() {
  return (
    <>
      <PageHeader
        title="Image Gallery"
        breadCrumbItems={[
          { label: 'Home', path: '/' },
          { label: 'Elements', path: '#' },
          { label: 'Image Gallery', path: '#', active: true },
        ]}
      />

      <div className="content-wrapper">
        <section className="section-ptb">
          <Container>
            <Row>
              <Col>
                <SectionTitle extraClass="mb-5" title="Image Gallery Style : 1" />
                <div className="image-gallery grid-wrapper grid-lg-3">
                  <ImageGallery
                    items="6"
                    theme="gallery-style-1"
                    data={ImageGalleryList}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section-ptb section-mb bg-light">
          <Container>
            <Row>
              <Col>
                <SectionTitle extraClass="mb-5" title="Image Gallery Style : 2" />
                <div className="image-gallery grid-wrapper grid-lg-3">
                  <ImageGallery
                    items="6"
                    theme="gallery-style-2"
                    data={ImageGalleryList2}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default ElementsImageGallery;
