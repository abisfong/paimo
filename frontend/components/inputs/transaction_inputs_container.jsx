import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  receiveTransactionCategory,
  removeTransactionCategory
} from '../../actions/transaction_actions';
import TransactionInputs from './transaction_inputs';

const mapStateToProps = ({ auth, search, transaction }) => {
  return {
    selection: search.selection,
    currentUser: auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTransactionCategory: type => dispatch(receiveTransactionCategory(type)),
    removeTransactionCategory: () => dispatch(removeTransactionCategory)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionInputs));