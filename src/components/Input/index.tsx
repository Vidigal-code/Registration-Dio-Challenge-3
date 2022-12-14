/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Controller } from "react-hook-form";

import {InputContainer, InputText, IconContainer, ErrorText } from './styles';
import { IInput } from './types';

const Input = ({leftIcon, name, control,errorMessage, ...rest}: IInput) => {


  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => ( 
        <InputText value={value} onChange={onChange}  {...rest} />
        )}
      />
    </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input }; 
