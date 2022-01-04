import React from "react";
import { Route } from "react-router";
import TransactionFormContainer from "./forms/transaction_form_container";
import MyTransactionsIndexContainer from "./transactions/my_transactions_index_container";
import RequestsIndexContainer from "./transactions/requests_index_container";

export default function MainView(props) {
  return (
    <div className='main-view'>
      <Route 
        path='/account/transaction' 
        render={ props => <TransactionFormContainer {...props}/> }
      />
      <Route
        exact
        path='/account'
        render={ props => <MyTransactionsIndexContainer {...props} /> }
      />
      <Route
        exact
        path='/account/incomplete'
        render={props => <RequestsIndexContainer {...props} />}
      />
    </div>
  );
}