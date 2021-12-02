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