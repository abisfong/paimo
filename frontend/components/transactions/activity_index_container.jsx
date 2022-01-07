import React from 'react';
import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import getUserTransactions from '../../utils/components/transaction/get_user_transactions';
import ActivityTabsContainer from '../tabs/activity_tabs_container';
import HeartIcon from '../icons/heart_icon';
import CommentIcon from '../icons/comment_icon';
import TransactionsIndex from "./transactions_index";

const mapStateToProps = ({ entities, auth, ui }) => {
  const currentTabNumber = ui.tabs.requests;
  const currentUser = auth.currentUser;
  const header = (
    <>
      <ActivityTabsContainer />
    </>
  );

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