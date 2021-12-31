import React from 'react';
import SearchIndexItem from './search_index_item';

export default class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    const searchEl = e.currentTarget;
    const inputEl = searchEl.children[searchEl.children.length - 1];
    inputEl.value = '';
  }

  render() {
    const searchResults = this.props.searchResults;
    const selectUser = this.props.selectUser;
    return (
      <ul 
        className={`${searchResults.length > 0 ? 'search-results' : ''}`}
        onClick={this.onClickHandler}
      >
        {
          searchResults.map(user => (
            <SearchIndexItem
              key={user.id}
              user={user}
              selectUser={selectUser}
            />
          ))
        }
      </ul>
    );
  }
}