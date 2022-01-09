import React from "react";
import { Route } from "react-router";
import TransactionFormContainer from "./forms/transaction_form_container";
import ActivityIndexContainer from "./transactions/activity_index_container";
import RequestsIndexContainer from "./transactions/requests_index_container";
import Search from './search';
import ProfileView from "./profile_view";

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
        render={ props => <ActivityIndexContainer {...props} /> }
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
      >        
      </Route>
      <Route
        exact
        path='/account/u/:id'
        render={props => <ProfileView {...props}/>}
      >
      </Route>
    </div>
  );
}