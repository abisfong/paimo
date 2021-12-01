export const createTransaction = (transaction) => (
  $.ajax({
    method: 'POST',
    url: '/api/transaction',
    data: { transaction }
  })
);