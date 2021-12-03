import React from 'react';
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
            return <Transaction 
              userId={user.id}
              transaction={transaction}
            />
          })
        }
      </>
    );
  }
}