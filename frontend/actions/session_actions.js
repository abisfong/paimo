import { 
  createUser
} from '../util/api/user_api';
import {
  createSession,
  deleteSession
} from '../util/api/session_api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const removeCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = formInput => dispatch => {
  return createUser(formInput).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSessionErrors(error))
  )
}

export const login = formInput => dispatch => {
  return createSession(formInput).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSessionErrors(error))
  )
};

export const logout = () => dispatch => {
  return deleteSession().then(
    () => dispatch(removeCurrentUser()),
    error => dispatch(receiveSessionErrors(error))
  )
};