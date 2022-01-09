import { connect } from "react-redux";
import { receiveActivityTabSelection } from "../../actions/tab_actions";
import Tabs from "./tabs";

const mapStateToProps = ({ ui }, ownProps) => {
  return {
    className: 'tabs sliding',
    currentTabNumber: ui.tabs.activity,
    firstTabContent: ownProps.firstTabContent,
    secondTabContent: ownProps.secondTabContent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabNumber: tabNumber => dispatch(receiveActivityTabSelection(tabNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);