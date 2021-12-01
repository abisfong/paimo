import React from "react";
import { Route } from "react-router";
import Transaction from "./transaction";

export default function MainView(props) {
  return (
    <div className='main-view'>
      <Route path='/account/transaction' component={Transaction}/>
    </div>
  );
}