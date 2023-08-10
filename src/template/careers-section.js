import aboutImage1 from '../../src/assets/images/about/08.webp';
import aboutImage2 from '../../src/assets/images/about/09.webp';
import Counter from '../component/counter/counter';
import List from '../component/list';

function CareersSection() {
  const listItems = [
    { id: 1, item: 'Success is something of which we all want more', url: '/' },
    {
      id: 2,
      item: 'Most people believe that success is difficult',
      url: '/blog',
    },
    {
      id: 3,
      item: 'There are basically six key areas to higher achievement',
      url: '/about-us',
    },
    { id: 4, item: 'Believing in yourself and those around you', url: '/team' },
    { id: 5, item: 'Making a decision to do something', url: '/404' },
  ];

  return (
    <>
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="row g-0 d-flex align-items-end mb-4 mb-sm-2">
          <div className="col-sm-8 pe-sm-2 mb-4 mb-sm-0">
            <img
              className="img-fluid border-radius-5"
              src={aboutImage1}
              alt=""
            />
          </div>
          <div className="col-sm-4">
            <Counter
              className="counter-primary-bg"
              themeColor="counter-light"
              countStart="0"
              countEnd="491"
              countTitle="Projects Complete"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6">
            <img
              className="img-fluid border-radius-5"
              src={aboutImage2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 ps-xl-5">
        <h2 className="mb-4">
          We enable constant enterprise transformation at speed and scale.
        </h2>
        <p className="mb-4">
          Success isn’t really that difficult. There is a significant portion of
          the population here in North America, that actually want and need
          success to be hard! Why? So they then have a built-in excuse when
          things don’t go their way! Pretty sad situation, to say the least.
        </p>
        <List icon="fas fa-check" data={listItems} />
      </div>
    </>
  );
}

export default CareersSection;
