// import './ProductCartModal.scss';

// import { useContext, useState } from 'react';
// import Modal from 'react-modal';

// // import { CartContext } from '../../contexts/cart.context';
// // import { UserContext } from '../../contexts/user.context';
// // import { checkObjectIsEmpty } from '../../utils/checkObjectIsEmpty';
// // import AmountButton from '../AmountButton/AmountButton';
// // import Button from '../Button/Button';

// export default function ProductCartModal(props: any) {
//   const [amount, setAmount] = useState(1);

//   // const { user } = useContext(UserContext);
//   // const { cart, setCart } = useContext(CartContext);

//   const getProductIndexInCart = () => {
//     // for (let i = 0; i < cart.length; i++) {
//     //   if (props.product.id === cart[i].product.id) {
//     //     return i;
//     //   }
//     }
//     return -1;
//   };

//   const putProductToCart = () => {
//     // const updatedCart = [...cart];
//     // const productIndex = getProductIndexInCart();
//     // if (productIndex === -1) {
//     //   updatedCart.push({
//     //     product: props.product,
//     //     amount: amount,
//     //   });
//     // } else {
//     //   cart[productIndex].amount += amount;
//     // }

//     // setCart([...updatedCart]);
//     // props.closeModal();
//   };

//   return (
//     <Modal
//       isOpen={props.isOpen}
//       className="product-cart-modal"
//       overlayClassName="product-cart-modal--overlay"
//       // centered
//     >
//       <div className="product-cart-modal--information-wrapper">
//         <div className="product-cart-modal--information">
//           <div className="product-cart-modal--detail-information">
//             {props.product.productName}
//             {!props.product.isAccumulate && !checkObjectIsEmpty(user) && (
//               <>
//                 <br />
//                 <br />
//                 <span className="product-cart-modal--detail-information-no-accumulation">
//                   적립제외상품
//                 </span>
//               </>
//             )}
//           </div>
//           <div className="product-cart-modal--price">
//             <span className="product-cart-modal--price-price">
//               {props.product.price.toLocaleString()}원
//             </span>
//             <AmountButton
//               className="product-cart-modal--price-amount"
//               amount={amount}
//               plus={() => setAmount(amount + 1)}
//               minus={() => amount > 0 && setAmount(amount - 1)}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="product-cart-modal--total">
//         <div className="product-cart-modal--total-wrapper">
//           <span className="product-cart-modal--total-total">합계</span>
//           <span className="product-cart-modal--total-won">원</span>
//           <span className="product-cart-modal--total-amount">
//             {(amount * props.product.price).toLocaleString()}
//           </span>
//         </div>
//         <div className="product-cart-modal--total-accumulation">
//           <span className="product-cart-modal--total-accumulation-badge">적립</span>
//           <span className="product-cart-modal--total-accumulation-description">
//             {checkObjectIsEmpty(user) ? (
//               <>
//                 로그인 후, {props.product.isDiscount && <>회원할인가와</>} 적립혜택 제공
//               </>
//             ) : (
//               <>
//                 구매 시
//                 <span className="product-cart-modal--total-accumulation-price">
//                   {props.product.isAccumulate ? (
//                     <>
//                       {' '}
//                       {Math.round(
//                         props.product.price * user.grade.accumulationPercent * amount,
//                       ).toLocaleString()}
//                     </>
//                   ) : (
//                     <> 0</>
//                   )}
//                   원 적립
//                 </span>
//               </>
//             )}
//           </span>
//         </div>
//       </div>
//       <div className="product-cart-modal--button">
//         <Button
//           className="product-cart-modal--button-cancel"
//           willDo={props.closeModal}
//           color="white-gray"
//           text="취소"
//         />
//         <Button
//           className="product-cart-modal--button-put-to-cart"
//           willDo={putProductToCart}
//           color="purple"
//           text="장바구니 담기"
//         />
//       </div>
//     </Modal>
//   );
// }
