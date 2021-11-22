import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    user: {
      username: '',
      password: ''
    },
    formType: 'Login'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);