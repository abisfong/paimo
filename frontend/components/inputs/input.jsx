import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.filteredProps = {
      id: this.props.id,
      onChange: this.props.onChange,
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
      placeholder: this.props.placeholder,
      type: this.props.type,
      ref: this.props._ref
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
          { this.props.children }
        </div>
      </>
    )
  }
}