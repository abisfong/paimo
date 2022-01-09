import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import { 
  getSelectedUser,
  removeSearchResults
} from '../../actions/search_actions';
import SearchIndex from './search_index';

const mapStateToProps = ({ search }) => ({
  searchResults: Object.values(search.results)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectUser: id => {
    if (ownProps.location.pathname !== '/account/search') 
      return dispatch(getSelectedUser(id))
    ownProps.history.push(`/account/u/${id}`);
  },
  removeSearchResults: () => dispatch(removeSearchResults)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex));