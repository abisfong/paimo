import React from "react";
import TransactionItem from "../transactions/transaction_item";
import CommentInput from "../inputs/comment_input";
import CommentsIndex from './comments_index';
import { dislike, like } from '../../actions/like_actions';
import HeartIcon from "../icons/heart_icon";
import CommentIcon from "../icons/comment_icon";

export default class View extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { 
      currentUser, 
      transaction, 
      transactor, 
      transactee,
      users
    } = this.props;
    console.log(this.props.comments);

    return (
      <div className='comment-view'>
        <TransactionItem
          key={transaction.id}
          actionButtons={
            <>
              <HeartIcon
                onClick={
                  transaction.liked ?
                    () => dislike(id) :
                    () => like(id)
                }
                className={transaction.liked ? 'liked' : ''}
                likeCount={transaction.like_count}
              />
              <CommentIcon />
            </>
          }
          currentUser={currentUser}
          transaction={transaction}
          transactor={transactor}
          transactee={transactee}
        />
        <div className='comments-container'>
          <CommentsIndex 
            comments={transaction.comments}
            deleteComment={this.props.deleteComment}
            users={users}
          />
          <CommentInput
            transactionId={transaction.id} 
            createComment={this.props.createComment}
            user={currentUser}
          />
        </div>
      </div>
    )
  }
}