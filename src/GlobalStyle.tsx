import { css, Global } from '@emotion/react';
import React from 'react';

const style = css`
  // 적용시킬 css 입력
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #ffffff;
    margin-bottom: 100px;
  }
  ol,
  ul {
    list-style: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
  /* html {
    font-size: 16px;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
    background-color: red;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    outline: none;
  }
  li {
    list-style: none;
  } */
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
