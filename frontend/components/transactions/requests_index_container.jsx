import React from "react";
import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import RequestsTabsContainer from './requests_tabs_container';
import RequestsIndex from "./requests_index";
import { 
  deleteTransaction,
  updateTransaction
} from "../../actions/transaction_actions";
import getRequestsSent from "../../utils/components/transaction/get_requests_sent";
import getRequestsToPay from "../../utils/components/transaction/get_requests_to_pay";

const mapStateToProps = ({ entities, auth, ui }) => {
  const currentTabNumber = ui.tabs.requests;
  const currentUser = auth.currentUser;
  const transactions = entities.transactions;
  const header = (
    <>
      <h1 className='requests-header'>
        Incomplete
      </h1>
      <RequestsTabsContainer
        className='tabs sliding'
        firstTabContent={'Requests'}
        secondTabContent={'Payments'}
      />
    </>
  )
  
  return {
    currentUser,
    friends: false,
    header,
    currentTabNumber,
    transactions: currentTabNumber === 0 ? 
      getRequestsSent(transactions, currentUser.id) : 
      getRequestsToPay(transactions, currentUser.id),
    users: entities.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: params => dispatch(getTransactions(params)),
    deleteTransaction: id => dispatch(deleteTransaction(id)),
    updateTransaction: id => dispatch(updateTransaction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestsIndex);