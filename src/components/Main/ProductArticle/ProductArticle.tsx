/* eslint-disable react/jsx-key */
import './ProductArticle.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

import { Link } from 'react-router-dom';
// import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Product from '../../Product/Product';

// SwiperCore.use([Navigation]);

export default function ProductArticle(props: any) {
  return (
    <article>
      <div className="section-header">
        <div className="section-header-title">
          <Link to="">
            <span className="section-title">{props.title}</span>
            {props.hasListPage && (
              <img
                className="section-title--arrow"
                src="https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_title_32_32.svg"
                alt="list"
              />
            )}
          </Link>
        </div>
        {props.description.length > 0 && (
          <span className="section-description">{props.description}</span>
        )}
      </div>
      <div className="swiper-wrapper">
        <Swiper
          className={`product-carousel product-carousel-${props.num}`}
          spaceBetween={18}
          slidesPerView={4}
          slidesPerGroup={4}
          navigation={{
            nextEl: '.button-next-' + props.num,
            prevEl: '.button-prev-' + props.num,
          }}
        >
          {props.products.map((p: any) => (
            <SwiperSlide>
              <Product
                id={p.id}
                productImage={p.productImage}
                productName={p.productName}
                price={p.price}
                isDiscount={p.isDiscount}
                discount={p.discount}
                priceBeforeDiscount={p.priceBeforeDiscount}
                hasCoupon={p.hasCoupon}
                coupon={p.coupon}
                isAccumulate={p.isAccumulate}
                type={p.type}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`swiper-button-prev button-prev-${props.num}`} />
        <div className={`swiper-button-next button-next-${props.num}`} />
      </div>
    </article>
  );
}
