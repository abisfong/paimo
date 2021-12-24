import React from "react";
import SearchIndexContainer from './search_index_container';
import SearchBarContainer from './search_bar_container';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-container'>
        <SearchBarContainer/>
        <SearchIndexContainer/>
      </div>
    )
  }
}