import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {

  removeTransactionCategory
} from '../../actions/transaction_actions';
import TransactionInputs from './transaction_inputs';

const mapStateToProps = ({ search }) => ({
  selections: search.selections,
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateFormInput: ({ category }) => {
      const { transaction } = ownProps.formState;
    },
    removeTransactionCategory: () => dispatch(removeTransactionCategory)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionInputs));