import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  createTransaction, 
} from '../../actions/transaction_actions';
import TransactionInputsContainer from '../inputs/transaction_inputs_container';
import Form from './form';

const mapStateToProps = ({ search }) => {
  return {
    payload: {
      amount: 0,
      note: '',
      category: '',
      selections: []
    },
    inputs: TransactionInputsContainer,
    formHeader: <p className="transaction-title">Paimo | Pay &amp; Request</p>,
    buttonLabel: 'Transaction',
    className: 'transaction-form',
    redirectTo: '/account',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: formInput => dispatch(createTransaction(formInput))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));