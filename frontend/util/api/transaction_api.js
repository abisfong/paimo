export const createTransaction = (formInput) => (
  $.ajax({
    method: 'POST',
    url: '/api/transaction',
    data: { transaction: formInput }
  })
);