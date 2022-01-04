import React from "react";
import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import FeedTabs from "./feed_tabs";
import RequestsIndex from "./requests_index";

const mapStateToProps = ({ entities, auth }) => {
  return {
    currentUser: auth.currentUser,
    friends: false,
    header: (
      <>
        <h1 className='requests-header'>
          Incomplete
        </h1>
        <FeedTabs 
          className='feed-tabs requests'
          firstTabContent={'Requests'}
          secondTabContent={'Payments'}
        />
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(RequestsIndex);