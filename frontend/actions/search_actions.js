import { search } from "../util/api/search_api";

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_SELECTION = 'RECEIVE_SEARCH_SELECTION';

const receiveSearchResults = users => ({
  type: RECEIVE_SEARCH_RESULTS,
  users
});

const receiveSearchSelection = user => ({]
})

export function getSearchResults(input) {
  return dispatch => {
    return search(input).then(
      users => dispatch(receiveSearchResults(users))
    )
  }
}
