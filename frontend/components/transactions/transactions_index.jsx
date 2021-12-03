import React from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../util/api/transaction_api';

class TransactionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentPage = 0;
  }

  componentDidMount() {
    this.props.getTransactions({
      userId: this.props.currentUser.id,
      friends: false,
      page: this.currentPage++
    });
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

const mapStateToProps = ({ entities, auth }) => {
  return {
    transactions: Object.values(entities.transactions),
    currentUser: auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: params => dispatch(getTransactions(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);