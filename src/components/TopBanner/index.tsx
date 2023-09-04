import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

import * as S from './styled';

function TopBanner() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <S.Container>
      <div className="embla" ref={emblaRef}>
        <div
          className="embla__container"
          style={{
            display: 'flex',
            margin: 0,
          }}
        >
          <S.EmblaSlide
            className="embla__slide"
            style={{
              overflow: 'hidden',
            }}
          >
            <img
              src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg"
              alt=""
            />
          </S.EmblaSlide>
          <S.EmblaSlide className="embla__slide">
            <img
              src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg"
              alt=""
            />
          </S.EmblaSlide>
          <S.EmblaSlide className="embla__slide">
            <img
              src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg"
              alt=""
            />
          </S.EmblaSlide>
        </div>
      </div>
    </S.Container>
  );
}

export default TopBanner;
