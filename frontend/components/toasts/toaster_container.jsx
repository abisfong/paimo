import React from "react";
import { connect } from "react-redux";
import orderErrors from '../../util/order_toast_messages';
import Toaster from "./toaster";

const mapStateToProps = ({errors}) => ({
  messages: orderErrors(errors)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);