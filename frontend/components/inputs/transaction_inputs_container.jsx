import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  receiveTransactionCategory,
  removeTransactionCategory
} from '../../actions/transaction_actions';
import TransactionInputs from './transaction_inputs';

const mapDispatchToProps = dispatch => {
  return {
    setTransactionCategory: category => dispatch(receiveTransactionCategory(category)),
    removeTransactionCategory: () => dispatch(removeTransactionCategory)
  }
};

export default withRouter(connect(null, mapDispatchToProps)(TransactionInputs));