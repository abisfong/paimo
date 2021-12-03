import React from 'react';

export default class TransactionsIndex extends React.Component {
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

const mapStateToProps = ({ entities }) => {
  return {
    transactions: Object.values(entities.transactions)
  }
}

const mapDispatchToProps = disptach => {
  return {
    getTransactions: () =>
  }
}