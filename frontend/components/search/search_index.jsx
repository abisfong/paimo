import React from 'react';

export default class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const searchResults = this.props.searchResults;
    return (
      <ul className='search-results'>
        {
          searchResults.map(result => (
            <li>
              {result.name}
            </li>
          ))
        }
      </ul>
    );
  }
}