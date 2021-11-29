import React from 'react';
import Toast from './toast';

export default class Toaster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors;
    return (
      <div className='toaster'>
        { 
          errors.map(error => {
            <Toast type/>
          })
        }
      </div>
    );
  }
}