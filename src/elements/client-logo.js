import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper';
import PageHeader from '../layouts/page-header/PageHeader';
import ClientLogoList, {
  AwardLogoList,
  ClientLogoList2,
} from '../data/client-logo-list';
import ClientLogo from '../component/client-logo';

function ElementsClientLogo() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Client Logo"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Client Logo', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper section-pb">
          <section className="section-ptb">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Swiper
                    modules={[Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    scrollbar={{ draggable: true }}
                  >
                    {ClientLogoList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <ClientLogo
                            key={ind}
                            className="cl-size-lg"
                            theme="logo-default"
                            data={val.imgSrc}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>

          <section className="section-ptb bg-light">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Swiper
                    modules={[Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    scrollbar={{ draggable: true }}
                  >
                    {AwardLogoList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <ClientLogo
                            key={ind}
                            className="cl-size-md"
                            theme="logo-grayscale"
                            data={val.imgSrc}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>

          <section className="section-ptb bg-secondary">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Swiper
                    modules={[Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={6}
                    scrollbar={{ draggable: true }}
                  >
                    {ClientLogoList2.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <ClientLogo
                            key={ind}
                            className="cl-size-sm"
                            theme="logo-light"
                            data={val.imgSrc}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsClientLogo;
