import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';

const App = () => (
  <>
    <div>Welcome to Paymo!</div>
    <Link to='/signup'>Signup</Link>
    <Link to='/login'>Login</Link>
    <Route path='/signup' render={props => <SignupFormContainer {...props}/>}></Route>
    <Route path='/login' render={props => <LoginFormContainer {...props}/>}></Route>
  </>
);

export default App;