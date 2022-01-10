import React from 'react';
import Input from '../input';
import ProfileImage from '../profile_view/profile_image';

export default class CommentInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Input
        id='comment'
        type='text'
        label={<ProfileImage user={this.props.user}/>}
        className='comment'
        placeholder='Write a comment ...'
        onChange={this.props.update}
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