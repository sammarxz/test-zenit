import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* Typography config */
    --font-size-base: 16px;
    --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    --font-line-height-base: 1.7;


    /* Colors */
    --color-white: #fff;
    --color-black: #1B1D28;
    --color-gray: #7795A9;
    --color-light-gray: #E7E7EE;
    --color-cta: #1900FF;
  }

  body {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    overflow-x: hidden;
  }
`