import { connect } from 'react-redux';
import { getSearchResults } from '../../actions/search_actions';
import { removeSearchSelection } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapStateToProps = ({ search }) => ({
  selections: Array.from(search.selections.values())
})

const mapDispatchToProps = (dispatch) => {
  return {
    search: (input, currentSelections) => {
      return dispatch(getSearchResults(input, currentSelections))
    },
    removeSelection: id => dispatch(removeSearchSelection(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);