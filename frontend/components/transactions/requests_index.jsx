import React from "react";
import TransactionsIndex from "./transactions_index";

export default class IncompleteTransactionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'requests'
    }
  }

  actionButtons() {
    const currentTabNumber = this.props.currentTabNumber;
    const firstButtonName = currentTabNumber === 0 ?  'Cancel' : 'Decline';
    const secondButtonName = currentTabNumber === 0 ?  'Remind' : 'Pay';

    return (id) => (
      <>
        <button 
          onClick={this.props.deleteTransaction(id)}
          className='base-action-white-link'
        >
          { firstButtonName }
        </button>
        <button className='base-action-white-link'>
          { secondButtonName }
        </button>
      </>
    )
  }

  render() {
    return (
      <>
        <TransactionsIndex 
          { ...this.props }
          actionButtons={ this.actionButtons() }
        />
      </>
    )
  }
}