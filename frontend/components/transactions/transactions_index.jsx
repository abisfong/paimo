import React from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../actions/transaction_actions';
import Transaction from './transaction';

class TransactionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentPage = 0;
  }

  componentDidMount() {
    this.props.getTransactions({
      userId: this.props.user.id,
      friends: false,
      page: this.currentPage++
    });
  }

  render() {
    const transactions = this.props.transactions;
    const user = this.props.user;
    return (
      <>
        { 
          transactions.map( transaction => {
            <Transaction 
              userId={user.id}
              transaction={transaction}
            />
          })
        }
      </>
    );
  }
}

const mapStateToProps = ({ entities, auth }) => {
  return {
    transactions: Object.values(entities.transactions),
    user: auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: params => dispatch(getTransactions(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);