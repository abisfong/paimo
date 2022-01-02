import React from 'react';
import { connect } from 'react-redux';
import { 
  createTransaction, 
  receiveLatestTransaction
} from '../../actions/transaction_actions';
import TransactionInputsContainer from '../inputs/transaction_inputs_container';
import Form from './form';

const mapStateToProps = ({ search }) => {
  return {
    payload: {
      transaction: {
        amount: 0,
        note: '',
        category: '',
        selections: []
      },
    },
    inputs: TransactionInputsContainer,
    formHeader: <p className="transaction-title">Paimo | Pay &amp; Request</p>,
    formType: 'Transaction',
    className: 'transaction-form',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: formInput => { 
      console.log(formInput);
      dispatch(createTransaction(formInput)).then(transaction => 
        dispatch(receiveLatestTransaction(transaction))
      )
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);