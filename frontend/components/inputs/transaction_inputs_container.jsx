import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  receiveTransactionType,
  removeTransactionType
} from '../../actions/transaction_actions';
import TransactionInputs from './transaction_inputs';

const mapStateToProps = ({ auth, search, transaction }) => {
  return {
    transactionType: transaction.type,
    selection: search.selection,
    currentUser: auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTransactionType: type => dispatch(receiveTransactionType(type)),
    removeTransactionType: () => dispatch(removeTransactionType)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionInputs));