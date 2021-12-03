import React from 'react';

export default class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  onSelect() {

  }

  render() {
    const searchResults = this.props.searchResults;
    return (
      <ul className={`${searchResults.length > 0 ? 'search-results' : ''}`}>
        {
          searchResults.map(result => (
            <li key={result.id}>
              <span className='search-name'>{ result.name }</span>
              <br />
              <span className='serach-username'>{ result.username }</span>
            </li>
          ))
        }
      </ul>
    );
  }
}