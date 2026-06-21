import "./HeroSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function HeroSlider({ hero }) {
  return (
    <section className="hero-layout">

      <div className="hero-left">

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000
          }}
          loop
        >
          {hero.mainSlider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className="hero-right">

        {hero.sideBanners.map((banner) => (
          <div
            key={banner.id}
            className="side-banner"
          >
            <img
              src={banner.image}
              alt=""
            />
          </div>
        ))}

      </div>

    </section>
  );
}

export default HeroSlider;