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
    const currentUser = this.props.currentUser;
    const transactions = this.props.transactions;
    const users = this.props.users;
    return (
      <div className='transactions-index'>
        { 
          transactions.reverse().map( transaction => {
            return <Transaction 
              key={transaction.id}
              transaction={transaction}
              transactor={currentUser}
              transactee={users[
                currentUser.id === transaction.payer_id ? 
                  transaction.payee_id : transaction.payer_id
              ]}
              users={users}
            />
          })
        }
      </div>
    );
  }
}