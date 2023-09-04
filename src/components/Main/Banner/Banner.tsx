/* eslint-disable react/jsx-key */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Autoplay]);

export default function Banner(props: any) {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="main-banner">
      <Swiper
        className="main-banner"
        slidesPerView={1}
        // navigation
        loop
        autoplay={{ delay: 4000 }}
        onActiveIndexChange={(i) => setActiveIndex(i.realIndex)}
      >
        {props.banner.map((b: any) => (
          <SwiperSlide>
            <Link to="">
              <img
                style={{ width: '100%' }}
                className="main-banner--image"
                src={b.img}
                alt="banner"
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className="main-banner--active-index-position-helper">
          <div className="main-banner--active-index">
            {activeIndex + 1} / {props.banner.length}
          </div>
        </div>
      </Swiper>
    </div>
  );
}
