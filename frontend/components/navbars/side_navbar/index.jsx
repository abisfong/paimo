import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Container);