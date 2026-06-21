import "./MediaMentions.css";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function MediaMentions({
  articles = [],
}) {
  return (
    <section className="media-mentions">

      <h2>
        Media Mentions
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={4}
        spaceBetween={20}
      >

        {articles.map((article) => (

          <SwiperSlide
            key={article.id}
          >

            <div className="media-card">

              <img
                src={article.image}
                alt=""
                className="media-image"
              />

              <img
                src={article.logo}
                alt=""
                className="media-logo"
              />

              <h3>
                {article.title}
              </h3>

              <p>
                {article.description}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
              >
                Read Full Article →
              </a>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default MediaMentions;