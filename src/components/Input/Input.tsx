import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isSearch: boolean;
}

const Wrapper = styled.div`
  position: relative;
`

const InputField = styled.input`
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 100%;
  padding: 16px 20px;
`

const SearchIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`

const Input: React.FC<InputProps> = ({ name, isSearch, ...rest }) => {
  return (
    <Wrapper>
      <InputField id={name} {...rest} />
      {isSearch && (
        <SearchIcon>
          <AiOutlineSearch size="1.4rem" className="c--light-gray" />
        </SearchIcon>
      )}
    </Wrapper>
  )
}

export { Input }