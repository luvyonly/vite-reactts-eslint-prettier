/* eslint-disable react/jsx-key */
import React from 'react';

import ProductArticle from '../../../components/Main/ProductArticle/ProductArticle';
import Category from './../../../components/Category';
import TopBanner from './../../../components/TopBanner';
import ProductData from './productArticleData.json';
import * as S from './styled';

function Home() {
  let i = 0;
  return (
    <S.Container>
      <TopBanner />
      <Category />

      <section>
        {ProductData.sections.map((s) => (
          <ProductArticle
            title={s.title}
            description={s.description}
            hasListPage={s.hasListPage}
            num={i++}
            products={s.products}
          />
        ))}
      </section>
    </S.Container>
  );
}

export default Home;
