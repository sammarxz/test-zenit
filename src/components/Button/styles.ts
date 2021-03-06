import styled from 'styled-components'

const Btn = styled.button`
  width: 100%;

  &.is--primary {
    box-shadow: 0px 8px 20px rgba(97, 62, 234, 0.32);
  }

  &.is--icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export { Btn }