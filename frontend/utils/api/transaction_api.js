export const createTransaction = formInput => (
  $.ajax({
    method: 'POST',
    url: '/api/transactions',
    data: { 
      transaction: formInput
    }
  })
);

export const updateTransaction = id => (
  $.ajax({
    method: 'PUT',
    url: `/api/transactions/${id}`,
  })
);

export const deleteTransaction = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/transactions/${id}`,
  })
);

export const getTransactions = params => (
  $.ajax({
    method: 'GET',
    url: `/api/transactions?${
      `user_id=${params.userId}&friends=${params.friends}&page=${params.page}`
    }`
  })
);