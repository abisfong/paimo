import { connect } from 'react-redux';
import { getSearchResults } from '../../actions/search_actions';
import { removeSearchSelection } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapStateToProps = ({ search }) => ({
  selections: Array.from(search.selections.values())
})

const mapDispatchToProps = dispatch => ({
  search: input => dispatch(getSearchResults(input)),
  removeSelection: id => dispatch(removeSearchSelection(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);