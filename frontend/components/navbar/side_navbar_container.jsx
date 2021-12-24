import { logout } from '../../actions/auth_actions';
import { connect } from 'react-redux';
import SideNavbar from './side_navbar';

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNavbar);