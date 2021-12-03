import React from 'react';
import { getTransactions } from '../../util/api/transaction_api';

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

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: params => dispatch(getTransactions(params))
  }
}