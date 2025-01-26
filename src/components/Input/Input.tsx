import { useState } from "react"
import { InputElement, InputWrapper } from "./styles"
import type { InputProps } from "./types"
import type { weatherValue } from "store/weatherSlice/types";

function Input({
  inputName,
  inputPlaceholder,
  inputType,
  value,
  onChange,
}: InputProps) {




  return (
    <InputWrapper>
      <InputElement
        name={inputName}
        type={inputType}
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  )
}

export default Input
