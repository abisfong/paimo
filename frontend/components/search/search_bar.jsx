import React from 'react';
import Input from '../inputs/input';
import debounce from '../../utils/debounce';
import SearchSelection from './search_selection';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.selections = new Map();
    this.inputElRef = React.createRef();
    this.search = debounce(e => {
      this.props.search(e.target.value);
    }, 400);
  }

  updateSelections() {
    const selection = this.props.selection;

    if (selection) {
      this.appendSelection(selection);
      this.clearInput();
      this.props.removeSearchSelection();
    }
  }

  appendSelection(selection) {
    this.selections.set(selection.id, selection);
  }

  clearInput() {
    const inputEl = this.inputElRef.current;
    inputEl.value = '';
  }

  createSelectionComponents() {
    const selections = Array.from(this.selections.values());
    return selections.map(selection => {
      return <SearchSelection key={selection.id} name={selection.name} />
    })
  }

  render() {
    this.updateSelections();

    return (
      <Input
        id='search-bar'
        type='text'
        label='To'
        className='search-bar'
        _ref={this.inputElRef}
        onChange={this.search}
        selections={this.createSelectionComponents()}
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