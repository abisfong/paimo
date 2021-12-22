import * as transactionApi from '../utils/api/transaction_api';

export const RECEIVE_TRANSACTIONS = 'RECIEVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';
export const RECEIVE_TRANSACTION_TYPE = 'RECIVE_TRANSACTION_TYPE';
export const REMOVE_TRANSACTION_TYPE = 'REMOVE_TRANSACTION_TYPE';
export const RECEIVE_LATEST_TRANSACTION = 'RECEIVE_LATEST_TRANSACTION';

export const receiveTransactions = ({transactions, users}, page) => ({
  type: RECEIVE_TRANSACTIONS,
  transactions,
  users,
  page
});

export const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction
});

export const removeTransaction = transaction => ({
  type: REMOVE_TRANSACTION,
  transaction
});

export const receiveTransactionErrors = errors => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors
});

export const receiveTransactionType = transactionType => ({
  type: RECEIVE_TRANSACTION_TYPE,
  transactionType
});

export const removeTransactionType = {
  type: REMOVE_TRANSACTION_TYPE
};

export const receiveLatestTransaction = transaction => ({
  type: RECEIVE_LATEST_TRANSACTION,
  transaction
});

export const createTransaction = formInput => dispatch => {
  return transactionApi.createTransaction(formInput).then(
    transaction => dispatch(receiveTransaction(transaction))
  );
}

export const getTransactions = params => dispatch => {
  return transactionApi.getTransactions(params).then(
    payload => dispatch(receiveTransactions(payload, params.page))
  );
}