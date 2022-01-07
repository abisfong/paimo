import React from 'react';
import TransactionItem from './transaction_item';

export default class TransactionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentPage = 0;
  }

  componentDidMount() {
    this.props.getTransactions({
      userId: this.props.currentUser.id,
      friends: this.props.friends,
      page: this.currentPage++
    });
  }

  render() {
    const actionButtons = this.props.actionButtons;
    const actionButtonFuncs = this.props.actionButtonFuncs
    const currentUser = this.props.currentUser;
    const header = this.props.header;
    const transactions = this.props.transactions
    const users = this.props.users;
    return (
      <div className='transactions-index'>
        { header }
        { 
          transactions.map( transaction => {
            return <TransactionItem 
              key={transaction.id}
              actionButtons={actionButtons(transaction.id, actionButtonFuncs)}
              transaction={transaction}
              transactor={currentUser}
              transactee={users[
                currentUser.id === transaction.payer_id ? 
                  transaction.payee_id : transaction.payer_id
              ]}
            />
          })
        }
      </div>
    );
  }
}