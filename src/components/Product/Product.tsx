import './Product.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

// import ProductCartModal from '../Modal/ProductCartModal';

export default function Product(props: any) {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

  return (
    <>
      <div className="product-card">
        <div className="product-thumbnail">
          <Link to={`/product/${props.id}`}>
            <div className="product-thumbnail--image-wrapper">
              <img
                className="product-thumbnail--image"
                src={props.productImage}
                alt="product"
                width={249}
                height={320}
              />
            </div>
          </Link>
          {props.hasCoupon && (
            <span className="product-thumbnail--coupon">+{props.coupon}%쿠폰</span>
          )}
          <button>
            <img
              onClick={() => setCartModalIsOpen(true)}
              className="product-thumbnail--cart"
              src="https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/cart_white_45_45.svg"
              alt="cart"
              role="presentation"
            />
          </button>
        </div>

        <div className="product-description">
          <span className="product-name">{props.productName}</span>

          <div className="product-price">
            {props.isDiscount ? (
              <>
                <span className="product-price--discount">{props.discount}%</span>
                <span className="product-price--price">
                  {props.price.toLocaleString()}원
                </span>
                <span className="product-price--price-before-discount">
                  {props.priceBeforeDiscount.toLocaleString()}원
                </span>
              </>
            ) : (
              <span className="product-price--price">
                {props.price.toLocaleString()}원
              </span>
            )}
          </div>
        </div>
      </div>
      {/* <ProductCartModal
        isOpen={cartModalIsOpen}
        closeModal={() => setCartModalIsOpen(false)}
        product={props}
        isAccumulate={false}
      /> */}
    </>
  );
}
