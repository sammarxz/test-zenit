import styled from 'styled-components'

const Checkbox = styled.div`
  display: flex;
  align-items: center;

  input {
    position: absolute; // take it out of document flow
    opacity: 0; // hide it

    & + label {
      position: relative;
      display: flex;
      align-items: center;
      transition: color .3s cubic-bezier(.4,.0,.23,1);

      & > span {
        background: transparent;
        border: 2px solid var(--color-border);
        border-radius: 4px;
        cursor: pointer; 
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1em;
        width: 24px;
        height: 24px;
        transition: all .3s cubic-bezier(.4,.0,.23,1);
      }

      & > ins {
        display: block;
        text-decoration: none;
        transition: color .3s cubic-bezier(.4,.0,.23,1);
        overflow: hidden;
        position: relative;

        &:after {
          background-color: var(--color-light-gray);
          content: '';
          display: block;
          height: 1px;
          width: 100%;
          position: absolute;
          top: 14px;
          left: 0;
          transform: translateX(-100%);
        }
      }
    }

    &:checked + label {
      & > span {
        border: 12px solid var(--color-light-gray);
        animation: shrink-bounce .2s cubic-bezier(.4,.0,.23,1);
  
        &:before {
          content: '';
          position: absolute;
          top: .6em;
          left: .3em;
          border-right: 3px solid transparent;
          border-bottom: 3px solid transparent;
          transform: rotate(45deg);
          transform-origin: 0% 100%;
          animation: checkbox-check .3s .3s cubic-bezier(.4,.0,.23,1) forwards;
        }
      }

      & > ins {
        color: var(--color-light-gray);

        &:after {
          animation: line-animation .2s .3s cubic-bezier(.4,.0,.23,1) forwards;
        }
      }
    }
  }

  @keyframes line-animation {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes shrink-bounce{
    0%{
      transform: scale(1);
    }

    33%{    
      transform: scale(.85);
    }

    100%{
      transform: scale(1);    
    }
  }

  @keyframes checkbox-check{
    0%{
      width: 0;
      height: 0;
      border-color: #fff;
      transform: translate3d(0,0,0) rotate(45deg);
    }

    33%{
      width: .3em;
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }

    100%{    
      width: .3em;
      height: .6em;    
      border-color: #fff;
      transform: translate3d(0,-.6em,0) rotate(45deg);
    }
  }
`

export { Checkbox }