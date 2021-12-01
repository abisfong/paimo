import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { 
  AuthRoute, 
  ProtectedRoute 
} from '../util/route';
import Navbar from './navbars';
import SigninFormContainer from './forms/signin_form_container';
import SignupFormContainer from './forms/signup_form_container';
import Splash from './splash';
import ToasterContainer from './toasts/toaster_container';
import Transaction from './transaction';

const App = () => (
  <>
    <Navbar></Navbar>
    <ToasterContainer></ToasterContainer>
    <ProtectedRoute path='/account/transaction' component={Transaction}/>
    <AuthRoute path='/signup' component={SignupFormContainer}/>
    <AuthRoute path='/sign-in' component={SigninFormContainer}/>
    <AuthRoute exact={true} path='/' component={Splash}/>
  </>
);

export default App;