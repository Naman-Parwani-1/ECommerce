import "./VideoProductSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import VideoProductCard from "./VideoProductCard";

function VideoProductSlider({
  videos = [],
  title = "",
}) {
  return (
    <section className="video-section">

      <h2>
        {title}
      </h2>

      <Swiper
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {videos.map((item) => (
          <SwiperSlide key={item.id}>
            <VideoProductCard
              item={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default VideoProductSlider;