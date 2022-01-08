export const RECEIVE_TRANSACTION_LIKE = 'RECEIVE_TRANSACTION_LIKE';
export const REMOVE_TRANSACTION_LIKE = 'REMOVE_TRANSACTION_LIKE';

export const receiveActivityTabSelection = tabNumber => ({
  type: RECEIVE_TRANSACTION_LIKE,
  tabNumber
});

export const removeTransactionLike = tabNumber => ({
  type: REMOVE_TRANSACTION_LIKE,
  tabNumber
})
