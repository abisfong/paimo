import React from "react";
import ProfileImage from "../profile_view/profile_image";
import createTimestamp from "../../utils/create_timestamp";

export default function CommentItem(props) {
  const comment = props.comment;
  const timestamp = createTimestamp(new Date(), new Date(comment.created_at))
  const currentUser = props.currentUser;
  const user = props.user;

  if (!user) return ''

  return (
    <div className='comment-item'>
      <ProfileImage user={props.user}/>
      <div className='content'>
        <header className='header'>
          <span className='name'>
            { user.name }
          </span>
        </header>
        <span className='date'>
          {timestamp}
        </span>
        <span className='body'>{comment.body}</span>
      </div>
      <div className='action-button'>
        { 
          comment.user_id === currentUser.id ? 
            <button 
              className='delete-button'
              onClick={() => props.deleteComment({
                commentId: comment.id,
                transactionId: comment.transaction_id,
                currentUserId: currentUser.id
              })}
            >
              Delete
            </button> : ''
        }
      </div>
    </div>
  )
}