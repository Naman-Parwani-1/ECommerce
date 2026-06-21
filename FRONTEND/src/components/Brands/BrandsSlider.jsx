import "./BrandsSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function BrandsSlider() {
  const brands = [
    "/brands/brand-1.JPG",
    "/brands/brand-2.JPG",
    "/brands/brand-3.JPG",
    "/brands/brand-4.JPG",
    "/brands/brand-5.JPG",
    "/brands/brand-6.JPG",
  ];

  return (
    <section className="brands-section">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={800}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="brand-card">
              <img src={brand} alt="brand" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BrandsSlider;