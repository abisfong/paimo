import React from 'react';
import { connect } from 'react-redux';
import { createTransaction } from '../../actions/transaction_actions';
import TransactionInputs from '../inputs/transaction_inputs';
import Form from './form';

const mapStateToProps = ({ auth }) => {
  return {
    payload: {
      transaction: {
        amount: 0,
        to: '',
        note: '',
        privacy: 'private',
        complete: false,
        payer_id: null,
        payee_id: null
      },
      transactee: {
        name: null
      }
    },
    currentUser: auth.currentUser,
    inputs: TransactionInputs,
    formType: 'Transaction',
    className: 'transaction-form'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: formInput => dispatch(createTransaction(formInput))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);