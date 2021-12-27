import React from 'react';
import Input from '../inputs/input';
import debounce from '../../utils/debounce';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.prevSelection = '';
    this.inputElRef = React.createRef();
    this.search = debounce(e => {
      this.props.search(e.target.value);
    }, 400);
  }

  componentDidUpdate() {
    const inputEl = this.inputElRef.current;
    const selectionName = this.props.selectionName;
    if (selectionName && selectionName !== this.prevSelection) {
      this.prevSelection = selectionName;
      inputEl.value = selectionName;
    }
  }

  onChangeHandler(e) {
    const inputEl = e.target;
    if (this.prevSelection !== inputEl.value.trim())
      this.props.removeSearchSelection();
  }

  render() {
    return (
      <Input
        id='search-bar'
        type='text'
        label='To'
        className='search-bar'
        _ref={this.inputElRef}
        onChange={this.search}
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