import React from 'react';

// import type { LinkProps } from "react-router-dom";
import Login from './Login';
import { Menu } from './Menu';
import { Mypage } from './Mypage';
import { Search } from './Search';
// import { useMatch, useResolvedPath } from "react-router-dom";
import * as S from './Styled';

function Navbar() {
  return (
    <>
      <S.Nav>
        <div>
          <Login />
          <S.TestWrap>
            <S.Test>
              <Search />

              <Mypage name="장바구니" icon_img="icon1" />
              <Mypage name="최근 본 상품" icon_img="icon2" />
              <Mypage name="마이페이지" icon_img="icon3" />
            </S.Test>
          </S.TestWrap>

          {/* <S.SiteTitle>
          <S.Nav_Link active_line={""} to="/">
            Site Name
          </S.Nav_Link>
        </S.SiteTitle>
        <S.Nav_ul>
          <CustomLink to="/pricing">Pricing</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </S.Nav_ul> */}
        </div>
      </S.Nav>
      <Menu />
    </>
  );
}

// function CustomLink({ children, to, ...props }: LinkProps) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   console.log(isActive?.pathname);
//   return (
//     <S.Nav_li>
//       <S.Nav_Link
//         active_line={isActive ? "underline" : "none"}
//         to={to}
//         {...props}
//       >
//         {children}
//       </S.Nav_Link>
//     </S.Nav_li>
//   );
// }

export default Navbar;
