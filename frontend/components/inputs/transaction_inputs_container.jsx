import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TransactionInputs from './transaction_inputs';

const mapStateToProps = ({ search }) => ({
  selections: search.selections,
})

export default withRouter(connect(mapStateToProps)(TransactionInputs));