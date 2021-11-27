import { connect } from 'react-redux';
import SideNavbar from './container';

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(SideNavbar);