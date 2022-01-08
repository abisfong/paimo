import * as likeApi from '../utils/api/like_api';

export const RECEIVE_TRANSACTION_LIKES = 'RECEIVE_TRANSACTION_LIKES';
export const RECEIVE_TRANSACTION_LIKE = 'RECEIVE_TRANSACTION_LIKE';
export const REMOVE_TRANSACTION_LIKE = 'REMOVE_TRANSACTION_LIKE';

export const receiveTransactionLike = transactionId => ({
  type: RECEIVE_TRANSACTION_LIKE,
  id: transactionId
});

export const removeTransactionLike = transactionId => ({
  type: REMOVE_TRANSACTION_LIKE,
  id: transactionId
})

export function like(transactionId) { 
  return dispatch => {
    return likeApi.createLike(transactionId).then(
      () => dispatch(receiveTransactionLike(transactionId))
    )
  }
}

export function dislike(transactionId) { 
  return dispatch => {
    return likeApi.deleteLike(transactionId).then(
      () => dispatch(removeTransactionLike(transactionId))
    )
  }
}