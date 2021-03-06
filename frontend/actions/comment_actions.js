import * as commentApi from '../utils/api/comment_api';

export const RECEIVE_TRANSACTION_COMMENT = 'RECEIVE_TRANSACTION_COMMENT';
export const REMOVE_TRANSACTION_COMMENT = 'REMOVE_TRANSACTION_COMMENT';

export const receiveTransactionComment = comment => ({
  type: RECEIVE_TRANSACTION_COMMENT,
  comment
});

export const removeTransactionComment = ({commentId, transactionId, currentUserId}) => ({
  type: REMOVE_TRANSACTION_COMMENT,
  commentId,
  transactionId,
  currentUserId
})

export function createComment(formInput) { 
  return dispatch => {
    return commentApi.createComment(formInput).then(
      comment => dispatch(receiveTransactionComment(comment))
    )
  }
}

export function deleteComment(data) { 
  return dispatch => {
    return commentApi.deleteComment(data.commentId).then(
      () => dispatch(removeTransactionComment(data))
    )
  }
}