import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
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
    commentCount: transaction.comments.length,
    transactionId,
    transactor: users[transaction.payer_id],
    transactee: users[transaction.payee_id],
    users
  }
}

const mapDispatchToProps = dispatch => ({
  // create show action for transaction and grab associated users (including in comments)
  // getTransaction: 
  createComment: formInput => dispatch(createComment(formInput)),
  deleteComment: id => dispatch(deleteComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(View);