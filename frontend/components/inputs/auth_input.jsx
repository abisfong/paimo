import React from "react";
import Input from "./input";
import {
  handleValidInputBlur,
  handleValidInputFocus
} from '../../utils/components/inputs/auth_input_validators';

export default function AuthInput(props) {
  return (
    <Input 
      {...props} 
      onBlur={e => handleValidInputBlur(e.target)}
      onFocus={e => handleValidInputFocus(e.target.parentElement)}
    />
  );
}