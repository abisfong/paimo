import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import TransactionsIndex from "./transactions_index";

const mapStateToProps = ({ entities, auth }) => {
  return {
    actionButtons: '',
    currentUser: auth.currentUser,
    friends: false,
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