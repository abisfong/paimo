import React from "react";
import { Route } from "react-router";
import TransactionFormContainer from "./forms/transaction_form_container";
import ActivityIndexContainer from "./transactions/activity_index_container";
import RequestsIndexContainer from "./transactions/requests_index_container";
import Search from './search';
import ProfileView from "./profile_view";
import getUserTransactions from "../utils/components/transaction/get_user_transactions";
import CommentsView from './comments_view'
import SettingsFormContainer from "./forms/settings_form_container";

export default function MainView(props) {
  return (
    <div className='main-view'>
      <Route
        exact
        path='/account'
        render={ props => 
          <ActivityIndexContainer 
            {...props} 
            firstTabContent='Friends'
            secondTabContent='You'
            firstFilter={transactions => transactions.filter(transaction => {
              return transaction.complete
            })}
            secondFilter={(transactions, {currentUserId}) => 
              getUserTransactions(transactions, currentUserId)
            }
          />
        }
      />
      <Route
        exact
        path='/account/transaction'
        render={props => <TransactionFormContainer {...props} />}
      />
      <Route
        exact
        path='/account/transaction/:transactionId'
        render={props => <CommentsView {...props}/>}
      />
      <Route
        exact
        path='/account/incomplete'
        render={props => <RequestsIndexContainer {...props} />}
      />
      <Route
        exact
        path='/account/search'
        render={props => <Search header='Search' {...props}/>}
      /> 
      <Route
        exact
        path='/account/settings'
        render={props => <SettingsFormContainer {...props}/>}
      /> 
      <Route
        exact
        path='/account/u/:id'
        render={props => <ProfileView {...props}/>}
      />
    </div>
  );
}