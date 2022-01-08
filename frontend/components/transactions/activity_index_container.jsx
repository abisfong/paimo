import React from 'react';
import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import getUserTransactions from '../../utils/components/transaction/get_user_transactions';
import ActivityTabsContainer from '../tabs/activity_tabs_container';
import HeartIcon from '../icons/heart_icon';
import CommentIcon from '../icons/comment_icon';
import TransactionsIndex from "./transactions_index";
import { dislike, like } from '../../actions/like_actions';

const mapStateToProps = ({ entities, auth, ui }) => {
  const currentTabNumber = ui.tabs.requests;
  const currentUser = auth.currentUser;
  const transactions = entities.transactions;

  return {
    actionButtons: (id, funcs) => {
      const transaction = transactions.find(transaction => transaction.id === id);
      console.log(transaction.liked);
      return (
        <>
          <HeartIcon 
            onClick={
              transaction.liked ?
              () => funcs.dislike(id) :
              () => funcs.like(id)
            }
            className={transaction.liked ? 'liked' : ''}
            likes={transaction.likes}
          />
          <CommentIcon/>
        </>
      )
    },
    currentUser,
    friends: false,
    header: <ActivityTabsContainer />,
    transactions: currentTabNumber === 0 ? 
      transactions :
      getUserTransactions(transactions, currentUser.id),
    users: entities.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: params => dispatch(getTransactions(params)),
    actionButtonFuncs: {
      dislike: id => dispatch(dislike(id)),
      like: id => dispatch(like(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);