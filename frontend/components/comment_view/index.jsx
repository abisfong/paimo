import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import View from './view';

const maptStateToProps = ({ entities }, ownProps) => {
  const transactionId = ownProps.match.params.transactionIid;
  const transaction = entities.transactions[transactionId];
  const users = entities.users;
  
  return {
    users,
    transaction,
    transactor: users[transaction.payer_id],
    transactee: users[transaction.payee_id]
  }
}

export default withRouter(connect(maptStateToProps)(View));