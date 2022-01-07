import React from "react";
import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import getRequestsSent from "../../utils/components/transaction/get_requests_sent";
import getRequestsToPay from "../../utils/components/transaction/get_requests_to_pay";
import RequestsTabsContainer from '../tabs/requests_tabs_container';
import TransactionsIndex from "./transactions_index";
import { 
  deleteTransaction,
  updateTransaction
} from "../../actions/transaction_actions";

const mapStateToProps = ({ entities, auth, ui }) => {
  const currentTabNumber = ui.tabs.requests;
  const currentUser = auth.currentUser;
  const firstButtonName = currentTabNumber === 0 ? 'Cancel' : 'Decline';
  const secondButtonName = currentTabNumber === 0 ? 'Remind' : 'Pay';
  const transactions = entities.transactions;
  const header = (
    <>
      <h1 className='requests-header'>Incomplete</h1>
      <RequestsTabsContainer/>
    </>
  );
  const actionButtons = (id, funcs) => (
    <>
      <button
        onClick={() => funcs.deleteTransaction(id)}
        className='base-action-white-link'
      >
        {firstButtonName}
      </button>
      <button
        {...secondButtonName === 'Pay' && { onClick: () => funcs.updateTransaction(id) }}
        className='base-action-white-link'
      >
        {secondButtonName}
      </button>
    </>
  )
  
  return {
    actionButtons,
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
    actionButtonFuncs: {
      deleteTransaction: id => dispatch(deleteTransaction(id)),
      updateTransaction: id => dispatch(updateTransaction(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);