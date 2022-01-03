import React from 'react';
import Input from '../input';

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    const inputEl = e.target;
    this.props.update(['note'], inputEl.value);
  }

  render() {
    const update = this.props.update;
    return (
      <Input
        id='note'
        type='textarea'
        label='Note'
        className='note'
        onChange={this.onChangeHandler}
        onFocus={e => {
          const inputContainer = e.target.parentElement;
          inputContainer.classList.add('note-focus');
        }}
        onBlur={e => {
          const inputContainer = e.target.parentElement;
          inputContainer.classList.remove('note-focus');
        }}
      />
    )
  }
}