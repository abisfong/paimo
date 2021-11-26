import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import { 
  AuthRoute, 
  ProtectedRoute 
} from '../util/route';
import Navbar from './navbar';
import SigninFormContainer from './forms/signin_form_container';
import SignupFormContainer from './forms/signup_form_container';

const App = () => (
  <>
    <Navbar></Navbar>
    <AuthRoute path='/signup' component={SignupFormContainer}></AuthRoute>
    <AuthRoute path='/sign-in' component={SigninFormContainer}></AuthRoute>
  </>
);

export default App;