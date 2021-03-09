import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-size: var(--font-size-base);
  }

  body {
    font-family: var(--font-family-base);
    line-height: var(--font-line-height-base);
  }

  p {
    margin-bottom: 1.15rem;
    color: var(--color-gray);
    font-size: 1em;
  }

  a {
    color: var(--color-cta);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    line-height: var(--font-line-height-base);
    color: var(--color-black);
  }

  h1 {
    font-size: 2em;
    line-height: 1.4;
  }

  h2 {
    font-size: 1.44em;
  }

  h3 {
    font-size: 1.2em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    margin: 1em 0 1.05em;
  }

  small {
    font-size: 0.833em;
  }

  li {
    list-style: disc;
  }

  ul {
    padding-left: 1.4em;
    margin-bottom: 1.4em;
  }

  hr {
    display: block;
    border-bottom: 1px solid var(--color-border);
  }
`;
