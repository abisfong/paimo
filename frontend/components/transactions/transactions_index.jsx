import React from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../util/api/transaction_api';

class TransactionsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const transactions = this.props.transactions;
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);