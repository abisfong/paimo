export const RECEIVE_ACTIVITY_TAB_SELECTION = 'RECEIVE_ACTIVITY_TAB_SELECTION';
export const RECEIVE_REQUESTS_TAB_SELECTION = 'RECEIVE_REQUESTS_TAB_SELECTION';
export const RECEIVE_USER_ACTIVITY_TAB_SELECTION = 'RECEIVE_USER_ACTIVITY_TAB_SELECTION';

export const receiveActivityTabSelection = tabNumber => ({
  type: RECEIVE_ACTIVITY_TAB_SELECTION,
  tabNumber
});

export const receiveRequestsTabSelection = tabNumber => ({
  type: RECEIVE_REQUESTS_TAB_SELECTION,
  tabNumber
})

export const receiveUserActivityTabSelection = tabNumber => ({
  type: RECEIVE_USER_ACTIVITY_TAB_SELECTION,
  tabNumber
});