import { connect } from "react-redux";
import withRouter from "react-router-dom/withRouter";
import { receiveActivityTabSelection } from "../../actions/tab_actions";
import Tabs from "./tabs";

const mapStateToProps = ({ auth, ui }, ownProps) => {
  const matchedUserId = parseInt(ownProps.match.params.id);
  const render = auth.currentUser.id !== matchedUserId;
  return {
    className: 'tabs sliding',
    currentTabNumber: render ? ui.tabs.activity : 0,
    currentUser: auth.currentUser,
    render,
    firstTabContent: ownProps.firstTabContent,
    secondTabContent: ownProps.secondTabContent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabNumber: tabNumber => dispatch(receiveActivityTabSelection(tabNumber))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tabs));