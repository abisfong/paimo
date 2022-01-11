import React from 'react';
import Input from '../inputs/input';
import debounce from '../../utils/debounce';
import SearchSelection from './search_selection';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    this.search = debounce(e => {
      const selectionIds = this.props.selections.map(selection => {
        return selection.id
      })
      this.props.search(e.target.value, selectionIds);
    }, 400);
  }

  componentWillUnmount() {
    this.props.removeSelections();
  }

  onKeyPressHandler(e) {
    if (e.key === 'Enter')
      e.preventDefault();
  }

  createSelectionComponents() {
    const selections = this.props.selections;
    return selections.map(selection => {
      return (
        <SearchSelection 
          key={selection.id}
          name={selection.name}
          remove={() => this.props.removeSelection(selection.id)}
        />
      )
    })
  }

  render() {
    const selectionComponents = this.createSelectionComponents();

    return (
      <Input
        id='search-bar'
        type='text'
        label={
          <>
            { this.props.label }
            { selectionComponents }
          </>
        }
        className='search-bar'
        onChange={this.search}
        onKeyPress={this.onKeyPressHandler}
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