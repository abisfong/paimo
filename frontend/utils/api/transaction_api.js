export const createTransaction = ({ transaction }) => (
  $.ajax({
    method: 'POST',
    url: '/api/transactions',
    data: { 
      transaction,
    }
  })
);

export const getTransactions = (params) => (
  $.ajax({
    method: 'GET',
    url: `/api/transactions?${
      `user_id=${params.userId}&friends=${params.friends}&page=${params.page}`
    }`
  })
);