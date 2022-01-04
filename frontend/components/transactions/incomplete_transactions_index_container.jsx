import React from "react";
import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import TransactionsIndex from "./transactions_index";

const mapStateToProps = ({ entities, auth }) => {
  return {
    actionButtons: (
      <>
        <button className='base-action-white-link'>
          Decline
        </button>
        <button className='base-action-white-link'>
          Pay
        </button>
      </>
    ),
    currentUser: auth.currentUser,
    friends: false,
    header: (
      <h1>
        Incomplete
      </h1>
    ),
    transactions: entities.transactions.filter(transaction => 
      !transaction.complete
    ),
    users: entities.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: params => dispatch(getTransactions(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);