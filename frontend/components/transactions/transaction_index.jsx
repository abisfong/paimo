import React from 'react';

export default class TransactionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        { 
          this.props.transactions.map(transaction => {
            
          })
        }
      </>
    );
  }
}