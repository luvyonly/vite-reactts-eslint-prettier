/* eslint-disable react/jsx-key */
import './index.css';

import React from 'react';

import icon_menu from '../../../assets/img/icon_menu.svg';
import icon_off_namul from '../../../assets/img/icon_off_namul.svg';
import icon_on_namul from '../../../assets/img/icon_on_namul.svg';
import categoryData from './category.json';
import * as S from './Styled';

export function Menu(): JSX.Element {
  return (
    <>
      <S.HorizonLine />

      <S.MenuWrap>
        <S.GnbCategory>
          <S.FrameMaterialSymbols alt="Material symbols" src={icon_menu} />

          <S.ThreeLine id="three-line">카테고리</S.ThreeLine>

          <S.CategoryListBox className="test">
            <S.CategoryList>
              {categoryData.category.map((c) => (
                <S.CategoryListItem>
                  <S.CategoryListItemIcon src={c.iconImage} alt="icon" />
                  <span>{c.title}</span>
                  <S.CategoryListItemSubList>
                    {c.sub.map((s) => (
                      <S.CategoryListItemSubListItem>
                        <span>{s.subTitle}</span>
                      </S.CategoryListItemSubListItem>
                    ))}
                  </S.CategoryListItemSubList>
                </S.CategoryListItem>
              ))}
            </S.CategoryList>
          </S.CategoryListBox>
        </S.GnbCategory>
        <S.Label>
          <S.LabelTextWrapper>할인특가</S.LabelTextWrapper>
          <S.LabelTextWrapper>신상품</S.LabelTextWrapper>
          <S.LabelTextWrapper>베스트100</S.LabelTextWrapper>
          <S.LabelTextWrapper>정기배송</S.LabelTextWrapper>
          <S.LabelTextWrapper>이벤트</S.LabelTextWrapper>
        </S.Label>
      </S.MenuWrap>

      <S.HorizonLine />
    </>
  );
}
