import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Carousel() {
    return (
        <div className="carousel">
            <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
            >
                {[1, 2, 3, 4, 5].map(num => (
                    <SwiperSlide key={num}>
                        <img src={`/public/img${num}.jpg`} alt={`Slide ${num}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

