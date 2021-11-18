import * as userApi from '../util/apo/user_api';

export const RECEIVE_USERS = 'RECIEVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USERS,
  user
});

export const removeUsers = user => ({
  type: REMOVE_USERS,
  user
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const receiveUsersThunk = (filters) => dispatch => {
  return () => {
    userApi.getUsers().then(
      (users) => dispatch(receiveUsers(users)),
      (errors) => dispatch(receiveUserErrors(errors))
    )
  }
}

export const receiveUserThunk = () => dispatch => {
  return userApi.getUsers().then(
    (user) => dispatch(receiveUsers(user)),
    (errors) => dispatch(receiveUserErrors(errors))
  )
}

export const receiveUsersThunk = (filters) => dispatch => {
  return () => {
    userApi.getUsers().then(
      (users) => dispatch(receiveUsers(users)),
      (errors) => dispatch(receiveUserErrors(errors))
    )
  }
}