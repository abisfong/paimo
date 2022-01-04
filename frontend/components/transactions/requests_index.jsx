import React from "react";
import TransactionsIndex from "./transactions_index";

export default class RequestsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'requests'
    }
  }

  toggleTab() {
    this.setState({ tab: 'payments' });
  }

  render() {
    return (
      <>
        <h1 className='requests-header'></h1>
        <TransactionsIndex 
          { ...this.props }
          actionButtons={
            <>
              <button className='base-action-white-link'>
                Decline
              </button>
              <button className='base-action-white-link'>
                Pay
              </button>
            </>
          }
        />
      </>
    )
  }
}