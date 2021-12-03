import React from 'react';
import { connect } from 'react-redux';
import { 
  createTransaction, 
  receiveTransactionType 
} from '../../actions/transaction_actions';
import TransactionInputs from '../inputs/transaction_inputs';
import Form from './form';

const mapStateToProps = ({ auth, search, transactionType }) => {
  return {
    payload: {
      transaction: {
        amount: 0,
        to: search.selection ? search.selection.id : '',
        note: '',
        privacy: 'private',
        complete: false,
        payer_id: transaction ? 
          transactionType === 'payment' ? 
            auth.currentUser.id : 
            search.selection ? 
              search.selection.id : null 
          : null,
        payee_id: transaction ?
          transactionType === 'request' ?
            search.selection ?
              search.selection.id : null
            : auth.currentUser.id
          : null
      },
      transactee: {
        name: search.selection ? search.selection.name : null
      },
      currentUser: auth.currentUser,
    },
    inputs: TransactionInputs,
    formHeader: <p className="transaction-title">Paimo | Pay &amp; Request</p>,
    formType: 'Transaction',
    className: 'transaction-form',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: formInput => dispatch(createTransaction(formInput)),
    setTransactionType: type => dispatch(receiveTransactionType(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);