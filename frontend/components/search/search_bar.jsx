import React from 'react';
import Input from '../inputs/input';
import debounce from '../../utils/debounce';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = debounce(e => {
      this.props.search(e.target.value);
    }, 400);
  }

  onChangeHandler(e) {
    this.search(e);
  }

  render() {
    const selectionName = this.props.selectionName;
    console.log(selectionName)
    return (
      <Input
        id='search-bar'
        type='text'
        label='To'
        className='search-bar'
        onChange={this.search}
        placeholder={selectionName || 'Name or username'}
        onFocus={e => {
          const inputContainer = e.target.parentElement;
          inputContainer.classList.add('search-bar-focus');
        }}
        onBlur={e => {
          const inputContainer = e.target.parentElement;
          inputContainer.classList.remove('search-bar-focus');
        }}
      />
    );
  }
}