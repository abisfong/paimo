import React from 'react';
import TransactionItem from './transaction_item';

export default class TransactionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentPage = 0;
  }

  componentDidMount() {
    this.getTransactions()
  }

  componentDidUpdate() {
    const currentUserId = this.props.currentUser.id;
    const matchedUserId = this.props.matchedUserId;
    const userId = matchedUserId || currentUserId;

    if (this.prevMatchedUserId !== userId) {
      this.getTransactions();
      this.currentPage = 0;
    }
  }

  getTransactions() {
    const currentUserId = this.props.currentUser.id;
    const matchedUserId = this.props.matchedUserId;
    const userId = matchedUserId || currentUserId;
    this.prevMatchedUserId = userId;

    return this.props.getTransactions({
      userId,
      friends: this.props.friends,
      page: this.currentPage
    });
  }


  render() {
    const { 
      actionButtons,
      actionButtonFuncs,
      currentTabNumber,
      currentUser,
      header,
      matchedUserId,
      transactions,
      users
    } = this.props;
    const transactor = matchedUserId && currentTabNumber === 0 ?
      users[matchedUserId] : currentUser
    return (
      <div className='transactions-index'>
        { header }
        { 
          transactions.map( transaction => {
            return <TransactionItem 
              key={transaction.id}
              actionButtons={actionButtons(transaction.id, actionButtonFuncs)}
              currentUser={currentUser}
              transaction={transaction}
              transactor={transactor}
              transactee={users[
                transactor.id === transaction.payer_id ? 
                  transaction.payee_id : transaction.payer_id
              ]}
            />
          })
        }
      </div>
    );
  }
}