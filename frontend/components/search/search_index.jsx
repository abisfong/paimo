import React from 'react';
import SearchIndexItem from './search_index_item';

export default class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const searchResults = this.props.searchResults;
    const selectUser = this.props.selectUser;
    return (
      <ul className={`${searchResults.length > 0 ? 'search-results' : ''}`}>
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