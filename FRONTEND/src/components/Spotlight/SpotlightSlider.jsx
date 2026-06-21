import "./SpotlightSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function SpotlightSlider({ spotlight = [] }) {
  if (!spotlight.length) return null;

  return (
    <section className="spotlight-section">

      <h2 className="spotlight-title">
        Spotlight 
      </h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={18}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 1,
          },

          1200: {
            slidesPerView: 2,
          },
        }}
      >
        {spotlight.map((item) => (
          <SwiperSlide key={item.id}>

            <div className="spotlight-item">

              <div className="spotlight-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div
                className="spotlight-content"
                style={{
                  backgroundColor: item.cardColor,
                }}
              >
                <h3>{item.title}</h3>

                <p>{item.review}</p>

                <span>{item.name}</span>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default SpotlightSlider;