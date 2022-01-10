import React from "react";
import TransactionItem from "../transactions/transaction_item";
import CommentInput from "../inputs/comment_input";
import CommentsIndexContainer from './comment_index_container';
import { dislike, like } from '../../actions/like_actions';
import HeartIcon from "../icons/heart_icon";
import CommentIcon from "../icons/comment_icon";

export default class View extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, transaction, transactor, transactee } = this.props;

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
        <CommentsIndexContainer comments={transaction.comments}/>
        <CommentInput user={currentUser}/>
      </div>
    )
  }
}