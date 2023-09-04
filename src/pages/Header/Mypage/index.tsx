import React from 'react';

import icon1 from '../../../assets/img/icon_cart.svg';
import icon2 from '../../../assets/img/icon_clock.svg';
import icon3 from '../../../assets/img/icon_person.svg';
import * as S from './Styled';

type GreetingsProps = {
  name: string;
  icon_img: string;
};

// export const MypageWrap = () => {
//   return <S.MypageWrap>dffd</S.MypageWrap>;
// };

export function Mypage({ name, icon_img }: GreetingsProps): JSX.Element {
  let icon_result = '';
  if (icon_img === 'icon1') icon_result = icon1;
  else if (icon_img === 'icon2') icon_result = icon2;
  else if (icon_img === 'icon3') icon_result = icon3;
  return (
    <S.Frame>
      <S.FramePrimeClock alt="Prime clock" src={icon_result} />
      <S.FrameTextWrapper> {name}</S.FrameTextWrapper>
    </S.Frame>
  );
}
