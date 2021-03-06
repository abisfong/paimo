import React from 'react';
import TransactionItem from '../transactions/transaction_item';
import CommentItem from './comment_item';

export default function CommentsIndex(props) {
  const comments = props.comments;
  const users = props.users;

  return (
    <div className='comments-index'>
      {
        comments.map(comment => {
          return (
            <CommentItem 
              key={comment.id}
              currentUser={props.currentUser}
              user={users[comment.user_id]} 
              comment={comment}
              deleteComment={props.deleteComment}
            />
          )
        })
      }
    </div>
  )
}