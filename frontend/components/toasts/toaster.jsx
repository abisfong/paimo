import React from 'react';
import Toast from './toast';

export default class Toaster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.errors)
    return '';
  }
}