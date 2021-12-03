import React from 'react';
import { connect } from 'react-redux';
import { getSelectedUser } from '../../actions/search_actions';

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
            <li key={user.id} onClick={() => selectUser(user.id)}>
              <img className='profile-picture' src="" alt="" />
              <div className='names'>
                <span className='fullname'>{ user.name }</span>
                <span className='username'>@{ user.username }</span>
              </div>
            </li>
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