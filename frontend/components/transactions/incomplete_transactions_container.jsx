import { connect } from "react-redux";
import { getTransactions } from '../../actions/transaction_actions';
import TransactionsIndex from "./transactions_index";

const mapStateToProps = ({ entities, auth }) => {
  return {
    transactions: entities.transactions.filter(transaction => 
      !transaction.complete
    ),
    currentUser: auth.currentUser,
    users: entities.users,
    friends: false
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: params => dispatch(getTransactions(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);