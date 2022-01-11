import React from "react";
import Input from "./input";
import handleValidInputBlur from '../../utils/components/inputs/handle_valid_input_blur';
import handleValidInputFocus from '../../utils/components/inputs/handle_valid_input_focus';

export default class AuthInput extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const required = this.props.required;
    console.log(this.props.value);
    return (
      <Input 
        {...this.props} 
        onBlur={e => handleValidInputBlur(e.target, required)}
        onFocus={e => handleValidInputFocus(e.target.parentElement, required)}
      />
    )
  }
}