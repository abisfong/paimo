import React from 'react';
import Input from '../inputs/input';
import debounce from '../../utils/debounce';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.prevSelection = '';
    this.inputElRef = React.createRef();
    this.search = debounce(input => {
      this.props.search(input);
    }, 400);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidUpdate() {
    const inputEl = this.inputElRef.current;
    const selectionName = this.props.selectionName;
    
    if (selectionName)
      inputEl.value = selectionName;
  }

  onChangeHandler(e) {
    const inputEl = e.target;
    const selectionName = this.props.selectionName;

    if (selectionName && this.prevSelection !== inputEl.value.trim())
      this.props.removeSearchSelection();
    this.search(inputEl.value);
  }

  render() {
    return (
      <Input
        id='search-bar'
        type='text'
        label='To'
        className='search-bar'
        onChange={this.search}
        _ref={this.inputElRef}
        placeholder={'Name or username'}
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