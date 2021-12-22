import React from 'react';
import Transaction from './transaction';

export default class TransactionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentPage = 0;
  }

  componentDidMount() {
    this.props.getTransactions({
      userId: this.props.user.id,
      friends: this.props.friends,
      page: this.currentPage++
    });
  }

  render() {
    const transactions = this.props.transactions;
    const user = this.props.user;
    const users = this.props.users;
    return (
      <div className='transactions-index'>
        { 
          transactions.reverse().map( transaction => {
            return <Transaction 
              key={transaction.id}
              userId={user.id}
              transaction={transaction}
              users={users}
            />
          })
        }
      </div>
    );
  }
}