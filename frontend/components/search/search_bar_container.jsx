import { connect } from 'react-redux';
import { getSearchResults } from '../../actions/search_actions';
import { removeSearchSelection } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapStateToProps = ({ search }) => ({
  selectionName: search.selection ? search.selection.name : ''
})

const mapDispatchToProps = dispatch => ({
  search: input => dispatch(getSearchResults(input)),
  removeSearchSelection: () => dispatch(removeSearchSelection)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);