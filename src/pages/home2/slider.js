import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';

// Site Data
import BannerImg1 from '../../assets/images/banner/03.jpg';
import BannerImg2 from '../../assets/images/banner/04.jpg';

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
                  <span className="text-stroke-white ">Extra Flexible</span>
                  <span className="font-large">Unique Design</span>
                </h2>
                <h6>A totally new way to grow your business</h6>
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
                <h2 className="title">
                  <span className="text-stroke-white ">We Are Digital</span>
                  <span className="font-large">Creative Agency</span>
                </h2>
                <h6>Award-Winning website design & creative digital agency</h6>
                <Link className="btn-secondary" to="/about-us">
                  Read More <i className="fas fa-arrow-right"></i>
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
