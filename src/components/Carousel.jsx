import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Carousel() {
    return (
        <div className="carousel">
            <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <img src="/src/assets/img/img1.jpg" alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/img/img2.webp" alt="Slide 2" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

