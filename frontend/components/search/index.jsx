import React from "react";
import SearchIndexContainer from './search_index_container';
import SearchBarContainer from './search_bar_container';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const header = this.props.header;
    const label = header ?
      <i className="fas fa-search"></i> :
      <span key='search-label'>To</span>
    
    return (
      <div className='search-container'>
        { header ? <h1>{ header }</h1> : '' }
        <SearchBarContainer label={label} />
        <SearchIndexContainer/>
      </div>
    )
  }
}