import React from "react";
import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import RequestsTabsContainer from './requests_tabs_container';
import RequestsIndex from "./requests_index";
import { deleteTransaction } from "../../utils/api/transaction_api";

const mapStateToProps = ({ entities, auth, ui }) => {
  const currentTabNumber = ui.tabs.requests;
  const currentUser = auth.currentUser;
  
  return {
    currentUser,
    friends: false,
    header: (
      <>
        <h1 className='requests-header'>
          Incomplete
        </h1>
        <RequestsTabsContainer 
          className='tabs requests'
          firstTabContent={'Requests'}
          secondTabContent={'Payments'}
        />
      </>
    ),
    currentTabNumber,
    transactions: entities.transactions.filter(transaction => 
      !transaction.complete && ( 
        currentTabNumber === 0 ? 
          transaction.payee_id == currentUser.id :
          transaction.payer_id == currentUser.id
      )
    ),
    users: entities.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: params => dispatch(getTransactions(params)),
    deleteTransaction: id => dispatch(deleteTransaction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestsIndex);