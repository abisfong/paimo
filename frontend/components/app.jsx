import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { 
  AuthRoute, 
  ProtectedRoute 
} from '../utils/route';
import Navbar from './navbar';
import SigninFormContainer from './forms/signin_form_container';
import SignupFormContainer from './forms/signup_form_container';
import Splash from './splash';
import ToasterContainer from './toaster/';
import MainView from './main_view';

const App = () => (
  <>
    <Navbar></Navbar>
    <ToasterContainer></ToasterContainer>
    <ProtectedRoute path='/account' component={MainView}/>
    <AuthRoute path='/signup' component={SignupFormContainer}/>
    <AuthRoute path='/sign-in' component={SigninFormContainer}/>
    <AuthRoute exact={true} path='/' component={Splash}/>
  </>
);

export default App;