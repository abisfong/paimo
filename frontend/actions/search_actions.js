import { search } from "../utils/api/search_api";

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_SELECTION = 'RECEIVE_SEARCH_SELECTION';
export const REMOVE_SEARCH_RESULTS = 'REMOVE_SEARCH_RESULTS';
export const REMOVE_SEARCH_SELECTION = 'REMOVE_SEARCH_SELECTION';
export const REMOVE_SEARCH_SELECTIONS = 'REMOVE_SEARCH_SELECTIONS';

const receiveSearchResults = users => ({
  type: RECEIVE_SEARCH_RESULTS,
  users
});

const receiveSearchSelection = user => ({
  type: RECEIVE_SEARCH_SELECTION,
  user
})

export const removeSearchResults = {
  type: REMOVE_SEARCH_RESULTS
}

export const removeSearchSelection = id => ({
  type: REMOVE_SEARCH_SELECTION,
  id
})

export const removeSearchSelections = {
  type: REMOVE_SEARCH_SELECTIONS
}

export function getSearchResults(input, selectionIds) {
  return dispatch => {
    return search(input, selectionIds).then(
      users => dispatch(receiveSearchResults(users))
    )
  }
}

export function getSelectedUser(data) {
  return (dispatch, getState) => {
    const user = typeof data === 'number' ? 
      getState().search.results[data] :
      data;
    dispatch(removeSearchResults);
    return dispatch(receiveSearchSelection(user));
  }
}