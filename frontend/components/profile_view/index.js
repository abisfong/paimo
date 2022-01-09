import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import View from './view';

const mapStateToProps = ({ auth, entities }, ownProps) => ({
  currentUser: auth.currentUser,
  user: entities.users[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(View);