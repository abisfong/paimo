import React from "react";
import Input from "./input";
import {
  handleValidInputBlur,
  handleValidInputFocus
} from '../../utils/components/inputs/auth_input_validators';

export default class AuthInput extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Input 
        {...this.props} 
        onBlur={e => handleValidInputBlur(e.target)}
        onFocus={e => handleValidInputFocus(e.target.parentElement)}
      />
    )
  }
}