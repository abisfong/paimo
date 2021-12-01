import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth_actions';
import TransactionInputs from '../inputs/transaction_inputs';
import Form from './form';

const mapStateToProps = () => {
  return {
    user: {
      amount: '0',
      to: '',
      note: '',
      privacy: 'private',
    },
    inputs: TransactionInputs,
    formType: 'Transaction',
    className: 'transaction-form'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);