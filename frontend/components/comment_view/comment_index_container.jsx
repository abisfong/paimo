import { connect } from 'react-redux';
import CommentsIndex from './comments_index';

const maptStateToProps = ({ entities }) => ({
  users: entities.users
});

export default connect(maptStateToProps)(CommentsIndex);