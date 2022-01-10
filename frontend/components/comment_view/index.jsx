import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import View from './view';

const mapStateToProps = ({ auth, entities }, ownProps) => {
  const currentUser = auth.currentUser;
  const transactionId = parseInt(ownProps.match.params.transactionId);
  const transaction = entities.transactions.find(transaction => 
    transaction.id === transactionId
  );
  const users = entities.users;
  
  return {
    currentUser,
    transaction,
    transactionId,
    transactor: users[transaction.payer_id],
    transactee: users[transaction.payee_id],
    users
  }
}

const mapDispatchToProps = dispatch => ({
  // create show action for transaction and grab associated users (including in comments)
  // getTransaction: 
})

export default withRouter(connect(mapStateToProps)(View));