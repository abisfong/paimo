import {
  createSession,
  deleteSession
} from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const removeCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const loginThunk = formInput => dispatch => (
  createSession(formInput).then(user => receiveCurrentUser(user))
)

export const logoutThunk = () => dispatch => (
  deleteSession().then(() => dispatch(removeCurrentUser()))
)