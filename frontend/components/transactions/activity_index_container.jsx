import React from 'react';
import { connect } from "react-redux";
import withRouter from 'react-router-dom/withRouter';
import { getTransactions } from '../../actions/transaction_actions';
import ActivityTabsContainer from '../tabs/activity_tabs_container';
import HeartIcon from '../icons/heart_icon';
import CommentIcon from '../icons/comment_icon';
import TransactionsIndex from "./transactions_index";
import { dislike, like } from '../../actions/like_actions';

const mapStateToProps = ({ entities, auth, ui }, ownProps) => {
  const currentUser = auth.currentUser;
  const matchedUserId = parseInt(ownProps.match.params.id);
  const currentTabNumber = currentUser.id === matchedUserId ? 0 : ui.tabs.activity;
  const transactions = entities.transactions;
  const firstFilter = ownProps.firstFilter;
  const secondFilter = ownProps.secondFilter;
  const filterData = {
    currentUserId: currentUser.id,
    matchedUserId
  }
  const actionButtons = (id, funcs) => {
    const transaction = transactions.find(transaction => transaction.id === id);
    return (
      <>
        <HeartIcon
          onClick={
            transaction.liked ?
              () => funcs.dislike(id) :
              () => funcs.like(id)
          }
          className={transaction.liked ? 'liked' : ''}
          likeCount={transaction.like_count}
        />
        <CommentIcon 
          onClick={() => ownProps.history.push(`/account/transaction/${id}`)}
          className={transaction.commented ? 'commented' : ''}
          commentCount={transaction.comments.length}
        />
      </>
    )
  }

  return {
    actionButtons,
    currentTabNumber,
    currentUser,
    matchedUserId,
    friends: false,
    header: <ActivityTabsContainer { ...ownProps }/>,
    transactions: currentTabNumber === 0 ? 
      firstFilter(transactions, filterData) :
      secondFilter(transactions, filterData),
    users: entities.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTransactions: params => dispatch(getTransactions(params)),
    actionButtonFuncs: {
      dislike: id => dispatch(dislike(id)),
      like: id => dispatch(like(id))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex));