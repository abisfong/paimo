import { search } from "../util/api/search_api";

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_SELECTION = 'RECEIVE_SEARCH_SELECTION';
export const REMOVE_SEARCH_RESULTS = 'REMOVE_SEARCH_RESULTS';

const receiveSearchResults = users => ({
  type: RECEIVE_SEARCH_RESULTS,
  users
});

const receiveSearchSelection = user => ({
  type: RECEIVE_SEARCH_SELECTION,
  user
})

const removeSearchResults = {
  type: REMOVE_SEARCH_RESULTS
}

export function getSearchResults(input) {
  return dispatch => {
    return search(input).then(
      users => dispatch(receiveSearchResults(users))
    )
  }
}

export function getSelectedUser(id) {
  return (dispatch, getState) => {
    const user = getState().search.results[id];
    dispatch(removeSearchResults);
    return dispatch(receiveSearchSelection(user));
  }
}