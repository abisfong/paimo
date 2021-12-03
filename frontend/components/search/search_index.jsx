import React from 'react';
import { connect } from 'react-redux';
import { getSelectedUser } from '../../actions/search_actions';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  onSelect() {

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

const mapStateToProps = ({ search }) => ({
  searchResults: Object.values(search.results)
});

const mapDispatchToProps = dispatch => ({
  selectUser: id => dispatch(getSelectedUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);