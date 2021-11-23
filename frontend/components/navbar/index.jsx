import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../../util/route';
import SplashNavbar from './splash_navbar';
import SigninNavbar from './signin_navbar';

const Navbar = () => (
  <>
    <Switch>
      <AuthRoute path='/sign-in' component={SigninNavbar}/>
      <AuthRoute path='/' component={SplashNavbar} />
    </Switch>
  </>
);

export default Navbar;