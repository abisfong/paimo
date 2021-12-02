import { search } from "../util/api/search_api";

const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'

const receiveSearchResults = users => ({
  type: RECEIVE_SEARCH_RESULTS,
  users
});

export default function getSearchResults(input) {
  return dispatch => {
    return search(input).then(
      users => dispatch(receiveSearchResults(users))
    )
  }
}
