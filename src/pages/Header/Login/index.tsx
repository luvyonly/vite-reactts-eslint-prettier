import React from 'react';

import * as S from './Styled';

function Login() {
  return (
    <S.frame>
      <S.navbar>
        <S.textWrapper>로그인</S.textWrapper>
        <S.textWrapper>회원가입</S.textWrapper>
        <S.textWrapper>고객센터</S.textWrapper>
        <S.textWrapper>주문조회</S.textWrapper>
      </S.navbar>
    </S.frame>
  );
}

export default Login;
