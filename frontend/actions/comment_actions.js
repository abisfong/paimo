import * as commentApi from '../utils/api/comment_api';

export const RECEIVE_TRANSACTION_COMMENTS = 'RECEIVE_TRANSACTION_COMMENTS';
export const RECEIVE_TRANSACTION_COMMENT = 'RECEIVE_TRANSACTION_COMMENT';
export const REMOVE_TRANSACTION_COMMENT = 'REMOVE_TRANSACTION_COMMENT';

export const receiveTransactionComment = comment => ({
  type: RECEIVE_TRANSACTION_COMMENT,
  comment
});

export const removeTransactionComment = id => ({
  type: REMOVE_TRANSACTION_COMMENT,
  id
})

export function createComment(comment) { 
  return dispatch => {
    return commentApi.createComment(comment).then(
      () => dispatch(receiveTransactionComment(comment))
    )
  }
}

export function deleteComment(id) { 
  return dispatch => {
    return commentApi.deleteComment(id).then(
      () => dispatch(removeTransactionComment(id))
    )
  }
}