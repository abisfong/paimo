import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../utils/route';
import SideNavbarContainer from './side_navbar_container';
import SplashNavbar from './splash_navbar';
import SigninNavbar from './sigin_navbar';

const Navbar = () => (
  <>
    <Switch>
      <ProtectedRoute path='/account' component={SideNavbarContainer}/>
      <AuthRoute path='/sign-in' component={SigninNavbar}/>
      <AuthRoute path='/' component={SplashNavbar} />
    </Switch>
  </>
);

export default Navbar;