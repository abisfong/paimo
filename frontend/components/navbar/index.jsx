import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route';
import SplashNavbar from './splash_navbar';
import SigninNavbar from './signin_navbar';

const Navbar = () => (
  <>
    <Switch>
      <AuthRoute path='/' component={SplashNavbar} />
      <AuthRoute path='/sign-in' component={SigninNavbar}/>
    </Switch>
  </>
);

export default Navbar;