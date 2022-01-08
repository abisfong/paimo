export const createLike = transaction_id => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { transaction_id }
  })
);

export const deleteLike = transaction_id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/likes/${transaction_id}`,
  })
);