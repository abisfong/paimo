import { connect } from "react-redux";
import withRouter from "react-router-dom/withRouter";
import { receiveActivityTabSelection } from "../../actions/tab_actions";
import Tabs from "./tabs";

const mapStateToProps = ({ auth, ui }, ownProps) => {
  return {
    className: 'tabs sliding',
    currentTabNumber: ui.tabs.activity,
    currentUser: auth.currentUser,
    render: auth.currentUser.id !== parseInt(ownProps.match.params.id),
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