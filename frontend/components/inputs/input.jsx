import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.filteredProps = {
      id: this.props.id,
      onChange: this.props.onChange,
      onKeyPress: this.props.onKeyPress,
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
      placeholder: this.props.placeholder,
      type: this.props.type,
      value: this.props.value,
      autoComplete: 'off'
    }
  }

  render() {
    const id = this.props.id;
    const label = this.props.label;
    const className = this.props.className;
    const errorMessage = this.props.errorMessage;
    console.log(this.props.value);
    return (
      <>
        <div className={className}>
          <label htmlFor={id}>{label}</label>
          { 
            this.props.type === 'textarea' ?
              <textarea {...this.filteredProps}/> :
              <input {...this.filteredProps}/>
          }
          <div className='invalid-input-text'>
            { errorMessage }
          </div>
        </div>
      </>
    )
  }
}