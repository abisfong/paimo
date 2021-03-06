import { 
  createUser
} from '../utils/api/user_api';
import {
  createSession,
  deleteSession
} from '../utils/api/auth_api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_AUTH_ERRORS = 'RECEIVE_AUTH_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

export const receiveAuthErrors = errors => ({
  type: RECEIVE_AUTH_ERRORS,
  errors
});

export const signup = formInput => dispatch => {
  return createUser(formInput).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveAuthErrors(errors))
  )
}

export const signin = formInput => dispatch => {
  return createSession(formInput).then(
    user => {
      dispatch(receiveCurrentUser(user))
    },
    errors => dispatch(receiveAuthErrors(errors))
  )
};

export const logout = () => dispatch => {
  return deleteSession().then(
    () => dispatch(removeCurrentUser()),
    errors => dispatch(receiveAuthErrors(errors))
  )
};