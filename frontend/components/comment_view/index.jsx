import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import View from './view';

const maptStateToProps = ({ auth, entities }, ownProps) => {
  const currentUser = auth.currentUser;
  const transactionId = parseInt(ownProps.match.params.transactionId);
  const transaction = entities.transactions.find(transaction => 
    transaction.id === transactionId
  );
  const users = entities.users;
  
  return {
    currentUser,
    transaction,
    transactor: users[transaction.payer_id],
    transactee: users[transaction.payee_id],
    users
  }
}

export default withRouter(connect(maptStateToProps)(View));