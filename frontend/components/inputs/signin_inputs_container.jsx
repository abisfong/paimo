import { connect } from 'react-redux';
import { signin } from '../../actions/auth_actions';

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user))
});

export default connect(null, mapDispatchToProps)(SigninInputs);