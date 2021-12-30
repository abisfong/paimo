import React from 'react';
import Input from '../inputs/input';
import debounce from '../../utils/debounce';
import getInputElements from '../../utils/components/inputs/get_input_elements';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.prevSelection = '';
    this.selections = {}
    this.inputElRef = React.createRef();
    this.search = debounce(input => {
      this.props.search(input);
    }, 400);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidUpdate() {
    const selectionName = this.props.selectionName;
    
    if (selectionName) {
      this.addSelection(selectionName)
      this.clearInput();
      this.updatePreviousSelection(selectionName);
    }
  }

  addSelection(selectionName) {
    this.selections
  }

  clearInput() {
    const inputEl = this.inputElRef.current;
    inputEl.value = '';
  }

  updatePreviousSelection(selectionName) {
    this.prevSelection = selectionName;
  }

  onChangeHandler(e) {
    const inputEl = e.target;
    if (this.props.selectionName)
      this.props.removeSearchSelection();
    this.search(inputEl.value.trim());
  }

  render() {
    return (
      <Input
        id='search-bar'
        type='text'
        label='To'
        className='search-bar'
        _ref={this.inputElRef}
        onChange={this.onChangeHandler}
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