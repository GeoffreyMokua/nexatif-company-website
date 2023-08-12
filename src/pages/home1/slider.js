import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Site Data
import BannerImg1 from '../../assets/images/banner/banner-img1.jpg';
import BannerImg2 from '../../assets/images/banner/banner-img2.jpg';

function Slider() {
  return (
    <>
      <section className="banner-section banner-slider">
        <Swiper
          className="mySwiper swiper-slider-light h-100"
          modules={[Navigation, Scrollbar, A11y]}
          navigation
          scrollbar={{ draggable: true }}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          lazy="true"
        >
          <SwiperSlide
            key="1"
            className="d-flex justify-content-center align-items-center bg-overlay-secondary overlay-30"
            style={{
              backgroundImage: `url(${BannerImg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="banner-item">
              <div className="banner-content">
                <h2 className="title">
                  A digital marketing company you can trust
                </h2>
                <h6>Award-Winning website design & creative digital agency.</h6>
                <Link className="btn-secondary" to="/about-us">
                  Get Started Now <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key="2"
            className="d-flex justify-content-center align-items-center bg-overlay-secondary overlay-30"
            style={{
              backgroundImage: `url(${BannerImg2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="banner-item">
              <div className="banner-content">
                <h2 className="title">Award winning digital agency</h2>
                <h6>We're Tronix. We help drive change with technology.</h6>
                <Link className="btn-secondary" to="/about-us">
                  View Our Solution <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Slider;
