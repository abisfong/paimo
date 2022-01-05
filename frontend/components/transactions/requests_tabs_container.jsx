import { connect } from "react-redux";
import { receiveRequestsTabSelection } from "../../actions/tab_actions";
import Tabs from "./tabs";

const mapStateToProps = ({ ui }) => {
  return {
    currentTabNumber: ui.tabs.requests
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabNumber: tabNumber => dispatch(receiveRequestsTabSelection(tabNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);