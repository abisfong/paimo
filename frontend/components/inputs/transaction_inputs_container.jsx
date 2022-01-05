import { connect } from 'react-redux';
import TransactionInputs from './transaction_inputs';

const mapStateToProps = ({ search }) => ({
  selections: search.selections,
})

export default connect(mapStateToProps)(TransactionInputs);