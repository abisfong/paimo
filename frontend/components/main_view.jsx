import React from "react";
import { Route } from "react-router";
import TransactionFormContainer from "./forms/transaction_form_container";

export default function MainView(props) {
  return (
    <div className='main-view'>
      <Route 
        path='/account/transaction' 
        render={ props => <TransactionFormContainer {...props}/> }
      />
    </div>
  );
}