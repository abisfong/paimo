import React from 'react';

export default class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='transaction'>
        <div className='container'>
          <p class="title">Paimo | Pay &amp; Request</p>
        </div>
      </div>
    );
  }
}