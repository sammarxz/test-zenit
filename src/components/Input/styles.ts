import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const InputField = styled.input`
  transition: border-color .3s ease;

  &:active,
  &:focus {
    border-color: var(--color-cta);

    & + div > svg {
      color: var(--color-cta);
    }
  }
`

const InputIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`

const Textarea = styled.textarea`
  height: 100px;
  transition: border-color .3s ease;

  &:active,
  &:focus {
    border-color: var(--color-cta);
  }
`

export { Wrapper, InputField, InputIcon, Textarea }