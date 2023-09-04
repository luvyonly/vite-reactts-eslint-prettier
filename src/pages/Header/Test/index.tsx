import React from 'react';

import logo from '../../../assets/img/teenyicons_search-outline.svg';
import * as S from './Styled';

export function Test(): JSX.Element {
  return (
    <S.Frame>
      <S.FrameElement>
        <S.FrameTextWrapper>로고영역</S.FrameTextWrapper>
      </S.FrameElement>
      <S.FrameDiv>
        <S.FrameTextWrapper2>맛있는 소세지 볶음</S.FrameTextWrapper2>
        <S.FrameTeenyiconsSearch src={logo} />
      </S.FrameDiv>
    </S.Frame>
  );
}
