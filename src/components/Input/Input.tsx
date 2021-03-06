import React, { InputHTMLAttributes } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Wrapper, InputField, SearchIcon } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isSearch?: boolean;
}

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