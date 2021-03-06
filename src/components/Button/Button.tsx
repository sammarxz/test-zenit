import React from 'react'
import { Btn } from './styles'

type ButtonProps = {
    text?: string,
    disable?: boolean,
    className?: string,
    onClick: Function,
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  disable, 
  className, 
  onClick,
  children = 'Click' 
}) => {
  const value = text || children
  const classNames = `
    ${className} 
    ${disable ?? 'is--disabled'}`

  return (
    <Btn 
      className={classNames} 
      onClick={(e) => onClick(e)}
    >
      {value}
    </Btn>
  )
}

export { Button }