import Col from 'react-bootstrap/Col';
import SectionTitle from '../component/section-title/section-title';
import aboutImage1 from '../../src/assets/images/about/05.webp';
import aboutImage2 from '../../src/assets/images/about/06.webp';
import aboutImage3 from '../../src/assets/images/about/07.webp';
import Counter from '../component/counter/counter';
import Button from '../component/button/button';

function TeamSection() {
  return (
    <>
      <Col lg={6} className="mb-4 mb-lg-0">
        <SectionTitle
          extraClass=""
          title="We enable constant enterprise transformation at speed and scale."
          content="We all carry a lot of baggage, thanks to our upbringing. The majority of people carry with them, an entire series of self-limiting beliefs that will absolutely stop, and hold them back from, success. Things like “I’m not good enough”, “I’m not smart enough”, “I’m not lucky enough”, and the worst,"
        />
        <Button btnClass="btn-light-round" btnText="Know More About" btnURL="/about-us" />
      </Col>

      <Col lg={6}>
        <div className="row">
          <div className="col-sm-6">
            <img
              className="img-fluid border-radius mb-4 mt-4"
              src={aboutImage1}
              alt=""
            />
            <img
              className="img-fluid border-radius mb-4 mb-sm-0"
              src={aboutImage2}
              alt=""
            />
          </div>
          <div className="col-sm-6">
            <img
              className="img-fluid border-radius mb-4"
              src={aboutImage3}
              alt=""
            />
            <Counter
              className="counter-primary-bg"
              themeColor="counter-light"
              countStart="0"
              countEnd="491"
              countTitle="Projects Complete"
            />
          </div>
        </div>
      </Col>
    </>
  );
}

export default TeamSection;
