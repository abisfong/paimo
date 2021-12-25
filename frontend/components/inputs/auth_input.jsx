import React from "react";
import Input from "./input";
import {
  handleValidInputBlur,
  handleValidInputFocus
} from '../../utils/auth_input_validation_handlers';

export default function AuthInput(props) {
  return (
    <Input 
      {...props} 
      onBlur={ e => handleValidInputBlur(e.target) }
      onFocus={e => handleValidInputFocus(e.target.parentElement) }
    />
  );
}