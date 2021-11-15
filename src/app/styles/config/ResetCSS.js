import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin    : 0;
    padding   : 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    line-height: 1.7;
    font-family: 'Monsterat', sans-serif
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

`;
