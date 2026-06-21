import "./TestimonialsSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function TestimonialsSlider() {
  const testimonials = [
    {
      image: "/founders/founder-1.JPG",
      name: "NITHIN KAMATH",
      role: "Founder, Rainmatter",
      review:
        "At Rainmatter Health, we care deeply about what we eat. Two Brothers Organic Farms stood out—clean food, deep purpose, and a clear mission to support farmer livelihoods. We're investors, but also proud customers."
    },
    {
      image: "/founders/founder-2.JPG",
      name: "ANAND S AHUJA",
      role: "Founder Bhaane",
      review:
        "Pure love, pure taste, pure intention. Every product from Two Brothers feels authentic and full of heart—from how it's grown to how it tastes. It inspires mindful consumption."
    },
    {
      image: "/founders/founder-1.JPG",
      name: "MIRA KAPOOR",
      role: "India",
      review:
        "One of the few brands that makes ghee the traditional way—from dahi, not malai. That alone won me over. Delicious, wholesome, and always a repeat buy."
    }
  ];

  return (
    <section className="testimonial-section">

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-wrapper">

              <div className="testimonial-top">

                <div className="stars">
                  ★★★★★
                </div>

                <div className="testimonial-info">

                  <div className="testimonial-name">
                    {item.name}
                  </div>

                  <div className="testimonial-role">
                    {item.role}
                  </div>

                </div>

              </div>

              <img
                src={item.image}
                alt={item.name}
                className="testimonial-avatar"
              />

              <div className="testimonial-card">

                <div className="testimonial-review">
                  {item.review}
                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default TestimonialsSlider;