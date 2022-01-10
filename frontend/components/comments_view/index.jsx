import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { dislike, like } from '../../actions/like_actions';
import { getTransaction } from '../../actions/transaction_actions';
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
    likeCount: transaction.like_count,
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
  deleteComment: id => dispatch(deleteComment(id)),
  dislike: id => dispatch(dislike(id)),
  like: id => dispatch(like(id)),
  getTransaction: id => dispatch(getTransaction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(View);