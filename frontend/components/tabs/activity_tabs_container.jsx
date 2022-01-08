import { connect } from "react-redux";
import { receiveActivityTabSelection } from "../../actions/tab_actions";
import Tabs from "./tabs";

const mapStateToProps = ({ ui }) => {
  return {
    className: 'tabs sliding',
    currentTabNumber: ui.tabs.activity,
    firstTabContent: 'Friends',
    secondTabContent: 'Me'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabNumber: tabNumber => dispatch(receiveActivityTabSelection(tabNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);