import * as transactionApi from '../util/api/transaction_api';

export const RECEIVE_TRANSACTIONS = 'RECIEVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';

export const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
});

export const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTIONS,
  transaction
});

export const removeTransaction = transaction => ({
  type: REMOVE_TRANSACTION,
  transaction
});

export const receiveTransactionErrors = errors => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors
})

export const createTransaction = formInput => dispatch => {
  return transactionApi.createTransaction(formInput).then(
  );
}