import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';

import CatData from '../data/category-box-list2';
import CategoryBoxStyle1, {
  CategoryBoxStyle2,
} from '../component/category-box';

function ElementsCategoryBox(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Category Box"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Category Box', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper section-pb">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Category Box : Style 1"
                  />
                  <div className="row">
                    {CatData.map((val, item) => {
                      return (
                        <Col key={item} xs={12} sm={6} md={6} lg={3}>
                          <CategoryBoxStyle1
                            key={item}
                            icon={val.icon}
                            className={val.className}
                            title={val.title}
                            id={val.id}
                            list={val.lists}
                          />
                        </Col>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-ptb bg-light">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Category Box : Style 2"
                  />
                  <div className="grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                    {CatData.map((val, item) => {
                      return (
                        <CategoryBoxStyle2
                          key={item}
                          icon={val.icon}
                          className={val.className}
                          title={val.title}
                          id={val.id}
                          list={val.lists}
                        />
                      );
                    })}
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

export default ElementsCategoryBox;
