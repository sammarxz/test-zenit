/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */
import React, { InputHTMLAttributes } from "react";
import { AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai";

import { InputIcon } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isSearch?: boolean;
  isDate?: boolean;
  click?: Function;
}

const Input: React.FC<InputProps> = ({
  name,
  isSearch,
  isDate,
  click,
  ...rest
}) => {
  return (
    <div className="p--relative">
      <input
        id={name}
        name={name}
        {...rest}
        onClick={() => (click ? click() : console.log("click"))}
      />
      {isSearch && (
        <InputIcon>
          <AiOutlineSearch size="1.4rem" className="c--light-gray" />
        </InputIcon>
      )}
      {isDate && (
        <InputIcon>
          <AiOutlineCalendar size="1.4rem" className="c--light-gray" />
        </InputIcon>
      )}
    </div>
  );
};

export { Input };
