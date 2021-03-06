import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  /* Colors */

  .c--gray {
    color: var(--color-gray);
  }

  .c--light-gray {
    color: var(--color-light-gray);
  }

  .c--black {
    color: var(--color-black);
  }

  .c--white {
    color: var(--color-white);
  }

  .bg--red {
    background-color: var(--color-red);
  }

  .bg--cta {
    background-color: var(--color-cta);
  }

  .bg--white {
    background-color: #fff;
  }

  /* Spaces */

  ${[0, 4, 8, 16, 24, 32, 40, 72].map((size) => css`
    .m--${size} {
      margin: ${size}px;
    }

    .p--${size} {
      padding: ${size}px;
    }

    ${['top', 'right', 'bottom', 'left'].map((dir) => css`
      .m${dir[0]}--${size}{
        margin-${dir}: ${size}px;
      }
      
      .p${dir[0]}--${size}{
        padding-${dir}: ${size}px;
      }
    `)}
  `)}


  /* Flex */

  .d--flex {
    display: flex;
  }
  
  .ai--center {
    align-items: center;
  }

  .ai--start {
    align-items: flex-start;
  }

  .jc--space-between {
    justify-content: space-between;
  }

  .fw--wrap {
    flex-wrap: flex-wrap;
  }

  .fd--column {
    flex-direction: column;
  }

  .fd--row {
    flex-direction: row;
  }


  /* Text */

  .fw--bold {
    font-weight: 700;
  }

  .fw--regular {
    font-weight: 400;
  }

  .fw--light {
    font-weight: 300;
  }

  .fs--small {
    font-size: .8rem;
  }

  .fs--normal {
    font-size: 1rem;
  }

  .fs--medium {
    font-size: 1.4rem;
  }


  /* Positions */

  .p--relative {
    position: relative;
  }

  .p--absolute {
    position: absolute;
  }


  /* Border */

  .br--12 {
    border-radius: 12px;
  }

  .br--8 {
    border-radius: 8px;
  }

  .br--4 {
    border-radius: 4px;
  }
`