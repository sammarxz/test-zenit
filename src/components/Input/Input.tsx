import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Wrapper, InputField, SearchIcon, Textarea } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isSearch?: boolean;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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

const TextArea: React.FC<TextAreaProps> = ({ ...rest }) => {
  return (
    <Textarea {...rest} />
  )
}

export { Input, TextArea }