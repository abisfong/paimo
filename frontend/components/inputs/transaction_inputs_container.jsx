import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  removeTransactionCategory
} from '../../actions/transaction_actions';
import TransactionInputs from './transaction_inputs';

const mapStateToProps = ({ search }) => ({
  selections: search.selections,
})

const mapDispatchToProps = dispatch => {
  return {
    updateFormInput: ({ category }) => {

    },
    removeTransactionCategory: () => dispatch(removeTransactionCategory)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionInputs));