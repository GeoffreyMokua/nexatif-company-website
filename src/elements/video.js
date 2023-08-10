import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeader from '../layouts/page-header/PageHeader';
import VideoPopup from '../component/video';
import videoImg from '../assets/images/blog/blog-img1.webp';

function ElementsVideo() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Video"
          theme="light"
          bgImageHide={true}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Video', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          <section className="section-ptb section-mb bg-light">
            <Container>
              <div className="row">
                <div className="col-sm-6">
                  <h3 className="mb-4">YouTube Video PopUp</h3>
                  <VideoPopup
                    videoURL="https://www.youtube.com/embed/LgvseYYhqU0"
                    videoImage={videoImg}
                  />
                </div>
                <div className="col-sm-6">
                  <h3 className="mb-4">Vimeo Video PopUp</h3>
                  <VideoPopup
                    theme="video-style-2"
                    size="lg"
                    videoURL="https://player.vimeo.com/video/783455878?h=46672b3b96"
                  />
                </div>
              </div>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsVideo;
