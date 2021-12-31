import { search } from "../utils/api/search_api";

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_SELECTION = 'RECEIVE_SEARCH_SELECTION';
export const REMOVE_SEARCH_RESULTS = 'REMOVE_SEARCH_RESULTS';
export const REMOVE_SEARCH_SELECTION = 'REMOVE_SEARCH_SELECTION';

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

export const removeSearchSelection = id => ({
  type: REMOVE_SEARCH_SELECTION,
  id
})

export function getSearchResults(input, selectionIds) {
  return dispatch => {
    return search(input, selectionIds).then(
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