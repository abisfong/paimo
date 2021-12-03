import { search } from "../util/api/search_api";

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_SELECTION = 'RECEIVE_SEARCH_SELECTION';

const receiveSearchResults = users => ({
  type: RECEIVE_SEARCH_RESULTS,
  users
});

const receiveSearchSelection = user => ({
  type: RECEIVE_SEARCH_SELECTION,
  user
})

export function getSearchResults(input) {
  return dispatch => {
    return search(input).then(
      users => dispatch(receiveSearchResults(users))
    )
  }
}

export function getSelectedUser(id) {
  return (dispatch, getState) => {
    user = getState().search.selection;
    return dispatch(receiveSearchResults(user));
  }
}