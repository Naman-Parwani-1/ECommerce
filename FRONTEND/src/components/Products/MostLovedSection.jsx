import "./MostLovedSection.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";

function MostLovedSection({ products = [] }) {
  return (
    <section className="most-loved-section">

      <div className="most-loved-header">

        <h2>Most Loved</h2>

        <button className="shop-more-btn">
          Shop More
        </button>

      </div>

      <Swiper
        spaceBetween={16}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              product={product}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default MostLovedSection;