import React from 'react';
import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import TransactionsIndex from "./transactions_index";
import CommentIcon from '../icons/comment_icon';
import HeartIcon from '../icons/heart_icon';

const mapStateToProps = ({ entities, auth }) => {
  return {
    actionButtons: (id, funcs) => (
      <>
        <HeartIcon />
        <CommentIcon />
      </>
    ),
    currentUser: auth.currentUser,
    friends: false,
    transactions: entities.transactions.filter(transaction =>
      transaction.complete && (
        transaction.payee_id === auth.currentUser.id ||
        transaction.payer_id === auth.currentUser.id
      ) 
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