import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TransactionInputs from './transaction_inputs';

const mapStateToProps = ({ search }) => ({
  selections: search.selections,
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateFormInput: ({ category }) => {
      const formInput = ownProps.formState;
      const selections = ownProps.selections;

      formInput.category = category;
      formInput.selections = selections;
    },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionInputs));