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

  /* Spaces */

  .m--0 {
    margin: 0;
  }

  .p--0 {
    padding: 0;
  }

  ${[0, 4, 8, 16, 24, 32, 40, 48].map((size) => css`
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
`