import React from "react";
import Input from "./input";
import {
  handleValidInputBlur,
  handleValidInputFocus
} from '../../util/callbacks/auth_form';

export default function AuthInput(props) {
  return (
    <Input 
      {...props} 
      onBlur={ e => handleValidInputBlur(e.target) }
      onFocus={e => handleValidInputFocus(e.target.parentElement) }
    />
  );
}