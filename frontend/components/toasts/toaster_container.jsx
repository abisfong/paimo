import React from "react";
import { connect } from "react-redux";
import orderTaostMessages from '../../util/order_toast_messages';
import Toaster from "./toaster";

const mapStateToProps = ({errors}) => ({
  messages: orderTaostMessages(errors)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);