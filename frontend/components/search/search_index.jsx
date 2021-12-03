import React from 'react';

class SearchIndex extends React.Component {
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
              <img className='profile-picture' src="" alt="" />
              <div className='names'>
                <span className='fullname'>{ result.name }</span>
                <span className='username'>@{ result.username }</span>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  searchResults: search
});


export default connect(mapStateToProps, null)(SearchIndex);