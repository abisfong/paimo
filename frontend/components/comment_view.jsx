import React from "react";
import TransactionItem from "./transactions/transaction_item";
import Input from './inputs/input'
import { dislike, like } from '../actions/like_actions';
import CommentInput from "./inputs/comment_input";

export default class CommentView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { transaction, transactor, transactee } = this.props;

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
                likeCount={transaction.likeCount}
              />
              <CommentIcon />
            </>
          }
          currentUser={currentUser}
          transaction={transaction}
          transactor={transactor}
          transactee={transactee}
        />
        <CommentInput />
      </div>
    )
  }
}