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
      <ul className='search-results'>
        {
          searchResults.map(result => (
            <li key={result.id}>
              {result.name}
              <br />
              {result.username}
            </li>
          ))
        }
      </ul>
    );
  }
}