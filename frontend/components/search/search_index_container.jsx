import { connect } from 'react-redux';
import { getSelectedUser } from '../../actions/search_actions';
import SearchIndex from './search_index';

const mapStateToProps = ({ search }) => ({
  searchResults: Object.values(search.results)
});

const mapDispatchToProps = dispatch => ({
  selectUser: id => dispatch(getSelectedUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);