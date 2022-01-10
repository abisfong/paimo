import React from 'react';
import Input from '../input';
import ProfileImage from '../profile_view/profile_image';

export default class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '' }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    //  if key pressed is enter, submit comment
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <Input
        id='comment'
        type='text'
        label={<ProfileImage user={this.props.user}/>}
        className='comment-input'
        placeholder='Write a comment ...'
        onChange={this.onChangeHandler}
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