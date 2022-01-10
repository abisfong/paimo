import React from "react";
import TransactionItem from "../transactions/transaction_item";
import CommentInput from "../inputs/comment_input";
import { dislike, like } from '../../actions/like_actions';

export default class View extends React.Component {
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