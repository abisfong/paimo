import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.filteredProps = {
      id: props.id, 
      type: props.type, 
      onChange: props.onChange, 
      onBlur: props.onBlur,
      onFocus: props.onFocus,
      placeholder: props.placeholder,
    }
  }

  render() {
    const id = this.props.id;
    const label = this.props.label;
    const className = this.props.className;
    return (
      <>
        <div className={className}>
          <label htmlFor={id}>{label}</label>
          { 
            this.props.type === 'textarea' ?
              <textarea {...this.filteredProps}/> :
              <input {...this.filteredProps}/>
          }
          <span className='invalid-input-text'></span>
        </div>
      </>
    )
  }
}