export const createComment = formInput => (
  $.ajax({
    method: 'POST',
    url: `/api/transactions/${formInput.transactionId}/comments`,
    data: { 
      user_id: formInput.userId,
      body: formInput.body
    }
  })
);

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`,
  })
);