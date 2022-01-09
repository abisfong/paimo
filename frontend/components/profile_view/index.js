import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ auth, entities }, ownProps) => ({
  currentUser: auth.currentUser,
  user: entities.users[ownProps.match.params.id]
})

export default connect(mapStateToProps)(Profile);