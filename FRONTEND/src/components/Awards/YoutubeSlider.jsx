import "./YoutubeSlider.css";

import {
    Swiper,
    SwiperSlide,
} from "swiper/react";

import {
    Navigation,
    Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function YoutubeSlider({
    videos = [],
}) {
    return (
        <section className="youtube-slider">

            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                ]}
                navigation
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={200}
                centeredSlides={true}
            >

                {videos.map((video) => (

                    <SwiperSlide
                        key={video.id}
                    >

                        <div className="video-wrapper">

                            <iframe
                                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>
    );
}

export default YoutubeSlider;