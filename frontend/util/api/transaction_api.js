export const createTransaction = (formInput) => (
  $.ajax({
    method: 'POST',
    url: '/api/transactions',
    data: { 
      transaction: formInput.transaction,
      transactee: formInput.transactee
    }
  })
);

export const getTransactions = (params) => (
  $.ajax({
    method: 'GET',
    url: `/api/transactions?${encodeURIComponent(
      `user_id=${params.userId}&friends=${params.friends}&page=${params.page}`
    )}`
  })
);