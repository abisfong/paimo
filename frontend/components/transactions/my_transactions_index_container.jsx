import React from 'react';
import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import TransactionsIndex from "./transactions_index";
import CommentIcon from '../icons/comment_icon';
import HeartIcon from '../icons/heart_icon';
import getUserTransactions from '../../utils/components/transaction/get_user_transactions';

const mapStateToProps = ({ entities, auth }) => {
  const currentUser = auth.currentUser;
  
  return {
    actionButtons: (id, funcs) => (
      <>
        <HeartIcon />
        <CommentIcon />
      </>
    ),
    currentUser,
    friends: false,
    transactions: getUserTransactions(entities.transactions, currentUser.id),
    users: entities.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: params => dispatch(getTransactions(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);