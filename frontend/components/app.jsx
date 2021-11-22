import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import { 
  AuthRoute, 
  ProtectedRoute 
} from '../util/route';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';

const App = () => (
  <>
    <div>Welcome to Paymo!</div>
    <Link to='/signup'>Signup</Link>
    <Link to='/login'>Login</Link>
    <Link to='/logout'></Link>
    <AuthRoute path='/signup' component={SignupFormContainer}></AuthRoute>
    <AuthRoute path='/login' component={LoginFormContainer}></AuthRoute>
  </>
);

export default App;