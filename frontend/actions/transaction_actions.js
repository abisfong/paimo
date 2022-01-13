import * as transactionApi from '../utils/api/transaction_api';

export const RECEIVE_TRANSACTIONS = 'RECIEVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';

export const receiveTransactions = ({transactions, users, insert}) => ({
  type: RECEIVE_TRANSACTIONS,
  transactions,
  users,
  insert
});

export const receiveTransaction = (transaction, users) => ({
  type: RECEIVE_TRANSACTION,
  transaction,
  users
});

export const removeTransaction = id => ({
  type: REMOVE_TRANSACTION,
  id
});

export const receiveTransactionErrors = errors => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors
});

export const createTransaction = formInput => dispatch => {
  return transactionApi.createTransaction(formInput).then(
    ({ transactions, users }) => 
      dispatch(receiveTransactions({
        transactions, 
        users,
        insert: true
      })),
    errors => dispatch(receiveTransactionErrors(errors))
  );
}

export const updateTransaction = id => dispatch => {
  return transactionApi.updateTransaction(id).then(
    transaction => {
      const users = transaction.users;
      delete transaction.users;
      return dispatch(receiveTransaction(transaction, users))
    },
    errors => dispatch(receiveTransactionErrors(errors))
  );
}

export const deleteTransaction = id => dispatch => {
  return transactionApi.deleteTransaction(id).then(
    message => {
      console.log(message);
      return dispatch(removeTransaction(id));
    },
    errors => dispatch(receiveTransactionErrors(errors))
  )
}

export const getTransactions = params => dispatch => {
  return transactionApi.getTransactions(params).then(
    ({ transactions, users }) => 
      dispatch(receiveTransactions({
        transactions: transactions || {}, 
        users: users || {},
        insert: params.page !== 0
      })),
    errors => dispatch(receiveTransactionErrors(errors))
  );
}

export const getTransaction = id => dispatch => {
  return transactionApi.getTransaction(id).then(
    transaction => {
      const users = transaction.users;
      delete transaction.users;
      return dispatch(receiveTransaction(transaction, users))
    },
    errors => dispatch(receiveTransactionErrors(errors))
  );
}