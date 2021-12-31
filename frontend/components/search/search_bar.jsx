import React from 'react';
import Input from '../inputs/input';
import debounce from '../../utils/debounce';
import SearchSelections from './search_selections';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.inputElRef = React.createRef();
    this.search = debounce(e => {
      this.props.search(e.target.value);
    }, 400);
  }

  clearInput() {
    const inputEl = this.inputElRef.current;
    inputEl.value = '';
  }

  createSelectionComponents() {
    const selections = Array.from(this.selections.values());
    return selections.map(selection => {
      return (
        <SearchSelection 
          key={selection.id} 
          name={selection.name} 
          removeSelection={() => {
            this.selections.delete(selection.id)
          }}
        />
      )
    })
  }

  render() {
    return (
      <Input
        id='search-bar'
        type='text'
        label={
          <>
            <span key='search-label'>To</span>
            <SearchSelections />
          </>
        }
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