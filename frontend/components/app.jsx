import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import { 
  AuthRoute, 
  ProtectedRoute 
} from '../util/route';
import Navbar from './navbars';
import SigninFormContainer from './forms/signin_form_container';
import SignupFormContainer from './forms/signup_form_container';
import Splash from './splash';
import Toast from './toasts/toast';

const App = () => (
  <>
    <Navbar></Navbar>
    <Toast type='error'>
      Toast error test
    </Toast>
    <AuthRoute exact={true} path='/' component={Splash}/>
    <AuthRoute path='/signup' component={SignupFormContainer}/>
    <AuthRoute path='/sign-in' component={SigninFormContainer}/>
  </>
);

export default App;