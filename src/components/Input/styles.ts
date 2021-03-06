import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const InputField = styled.input`
  font-size: 14px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 100%;
  padding: 16px 20px;
  transition: border-color .3s ease;

  &:active,
  &:focus {
    border-color: var(--color-cta);

    & + div > svg {
      color: var(--color-cta);
    }
  }
`

const SearchIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`

export { Wrapper, InputField, SearchIcon }