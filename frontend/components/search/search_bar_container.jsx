import { connect } from 'react-redux';
import { getSearchResults } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapDispatchToProps = dispatch => ({
  search: input => dispatch(getSearchResults(input))
});

export default connect(null, mapDispatchToProps)(SearchBar);