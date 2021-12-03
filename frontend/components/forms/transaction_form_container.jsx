import React from 'react';
import { connect } from 'react-redux';
import { 
  createTransaction, 
  receiveLatestTransaction
} from '../../actions/transaction_actions';
import TransactionInputs from '../inputs/transaction_inputs';
import Form from './form';

const mapStateToProps = ({ auth, search, transaction }) => {
  console.log(auth, search, transaction);
  return {
    payload: {
      transaction: {
        amount: 0,
        note: '',
        privacy: 'private',
        complete: false,
      }
    },
    inputs: TransactionInputs,
    formHeader: <p className="transaction-title">Paimo | Pay &amp; Request</p>,
    formType: 'Transaction',
    className: 'transaction-form',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: formInput => { 
      dispatch(createTransaction(formInput)).then( transaction => 
        dispatch(receiveLatestTransaction(transaction))
      )
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);