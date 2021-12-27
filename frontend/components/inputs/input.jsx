import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  getFilteredProps() {
    return {
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
    const filteredProps = this.getFilteredProps();
    return (
      <>
        <div className={className}>
          <label htmlFor={id}>{label}</label>
          { 
            this.props.type === 'textarea' ?
              <textarea {...filteredProps}/> :
              <input {...filteredProps}/>
          }
          <span className='invalid-input-text'></span>
          { this.props.children }
        </div>
      </>
    )
  }
}