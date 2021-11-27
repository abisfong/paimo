import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route';
import SideNavbar from './side_navbar';
import SplashNavbar from './splash_navbar';
import SigninNavbar from './sigin_navbar';

const Navbar = () => (
  <>
    <Switch>
      <ProtectedRoute path='/account' component={SideNavbar}/>
      <AuthRoute path='/sign-in' component={SigninNavbar}/>
      <AuthRoute path='/' component={SplashNavbar} />
    </Switch>
  </>
);

export default Navbar;