import React from 'react';
import Input from '../inputs/input';
import debounce from '../../utils/debounce';
import getInputElements from '../../utils/components/inputs/get_input_elements';

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
    
    if (selectionName) {
      this.addSelection(inputEl, selectionName)
      this.clearInput(inputEl);
      this.updatePreviousSelection(selectionName);
    }
  }

  addSelection(inputEl, selectionName) {
    const { inputContainerEl } = getInputElements(inputEl);
    const elementsNotSelectionsCount = 3
    const selectionElementsCount = inputContainerEl.childNodes.length - elementsNotSelectionsCount;
    const selectionEl = this.createSelectionElement(selectionName);
    
    inputContainerEl.insertBefore(
      selectionEl,
      inputContainerEl.childNodes[selectionElementsCount + 1]
    );
  }

  createSelectionElement(selectionName) {
    const selectionEl = document.createElement('span');
    selectionEl.innerHTML = `${selectionName} <i class="fas fa-times"></i>`;
    selectionEl.classList.add('search-selection');
  }

  clearInput(inputEl) {
    inputEl.value = '';
  }

  updatePreviousSelection(selectionName) {
    this.prevSelection = selectionName;
  }

  onChangeHandler(e) {
    const inputEl = e.target;
    if (this.props.selectionName && this.prevSelection !== inputEl.value.trim())
      this.props.removeSearchSelection();

    if (!this.props.selectionName)
      this.search(inputEl.value);
  }

  render() {
    return (
      <Input
        id='search-bar'
        type='text'
        label='To'
        className='search-bar'
        onChange={this.onChangeHandler}
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