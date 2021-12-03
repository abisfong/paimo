import React from 'react';

export default class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const transaction = this.props.transaction;
    const userId = this.props.userId;
    return (
      <div className='transaction'>
        { 
          transaction.payer_id === userId ?  
            `You paid`
        }
      </div>
    );
  }
}