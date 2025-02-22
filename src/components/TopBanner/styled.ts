import styled from '@emotion/styled';

export const Container = styled.div`
  overflow: hidden;

  .embla {
    --slide-spacing: 1rem;
    --slide-size: 100%;
    --slide-height: 19rem;
    padding: 1.6rem;
  }

  .embla__viewport {
    position: relative;
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    flex-direction: row;
    height: auto;
    margin-left: calc(var(--slide-spacing) * -1);
  }

  .embla__slide {
    flex: 0 0 var(--slide-size);
    min-width: 0;
    padding-left: var(--slide-spacing);
    position: relative;
  }

  .embla__slide__img {
    display: block;
    height: var(--slide-height);
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .embla__slide__number {
    width: 4.6rem;
    height: 4.6rem;
    z-index: 1;
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    border-radius: 50%;
    background-color: rgba(var(--background-site-rgb-value), 0.85);
    line-height: 4.6rem;
    font-weight: 900;
    text-align: center;
    pointer-events: none;
  }

  .embla__slide__number > span {
    color: var(--brand-primary);
    background-image: linear-gradient(
      45deg,
      var(--brand-primary),
      var(--brand-secondary)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.6rem;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .embla-thumbs {
    --thumbs-slide-spacing: 0.8rem;
    --thumbs-slide-height: 9rem;
    margin-top: var(--thumbs-slide-spacing);
  }

  .embla-thumbs__viewport {
    overflow: hidden;
  }

  .embla-thumbs__container {
    display: flex;
    flex-direction: row;
    margin-left: calc(var(--thumbs-slide-spacing) * -1);
  }

  .embla-thumbs__slide {
    flex: 0 0 28%;
    min-width: 0;
    padding-left: var(--thumbs-slide-spacing);
    position: relative;
  }

  @media (min-width: 576px) {
    .embla-thumbs__slide {
      flex: 0 0 18%;
    }
  }

  .embla-thumbs__slide__button {
    -webkit-appearance: none;
    background-color: transparent;
    touch-action: manipulation;
    display: block;
    text-decoration: none;
    cursor: pointer;
    border: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    opacity: 0.2;
    transition: opacity 0.2s;
  }

  .embla-thumbs__slide--selected .embla-thumbs__slide__button {
    opacity: 1;
  }

  .embla-thumbs__slide__img {
    display: block;
    height: var(--thumbs-slide-height);
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .embla-thumbs__slide__number {
    width: 3rem;
    height: 3rem;
    z-index: 1;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    border-radius: 50%;
    background-color: rgba(var(--background-site-rgb-value), 0.85);
    line-height: 3rem;
    font-weight: 500;
    text-align: center;
    pointer-events: none;
  }

  .embla-thumbs__slide__number > span {
    color: var(--brand-primary);
    background-image: linear-gradient(
      45deg,
      var(--brand-primary),
      var(--brand-secondary)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.4rem;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .embla__button {
    z-index: 1;
    color: var(--background-site);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    background: rgba(255, 255, 255, 0.2);
    border: none;
  }
  .embla__button:active {
    transform: translateY(-50%) scale(0.97);
  }

  .embla__button--prev {
    left: 1.6rem;
  }

  .embla__button--next {
    right: 1.6rem;
  }

  .embla__button:disabled {
    opacity: 0.3;
  }

  .embla__button__svg {
    width: 65%;
    height: 65%;
  }
`;

export const EmblaSlide = styled.div`
  img {
    width: 1280px;
    display: flex;
    margin: 0 auto;
  }
`;
