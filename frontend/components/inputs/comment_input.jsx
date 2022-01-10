import React from 'react';
import Input from './input';
import ProfileImage from '../profile_view/profile_image';

export default class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this)
  }

  onKeyPressHandler(e) {
    if(e.key === 'Enter') {
      this.props.createComment({
        userId: this.props.user.id,
        transactionId: this.props.transactionId,
        body: e.target.value,
      });
      e.target.value = '';
    }
  }

  render() {
    return (
      <Input
        id='comment'
        type='text'
        label={<ProfileImage user={this.props.user}/>}
        className='comment-input'
        placeholder='Write a comment ...'
        onKeyPress={this.onKeyPressHandler}
        onFocus={e => {
          const inputContainer = e.target.parentElement;
          inputContainer.classList.add('comment-focus');
        }}
        onBlur={e => {
          const inputContainer = e.target.parentElement;
          inputContainer.classList.remove('comment-focus');
        }}
      />
    )
  }
}