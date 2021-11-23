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
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';

const App = () => (
  <>
    <Navbar></Navbar>
    <AuthRoute path='/signup' component={SignupFormContainer}></AuthRoute>
    <AuthRoute path='/sign-in' component={LoginFormContainer}></AuthRoute>
  </>
);

export default App;