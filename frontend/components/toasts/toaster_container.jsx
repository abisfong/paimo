import React from "react";
import { connect } from "react-redux";
import { RemoveError } from "../../actions/error_actions";
import orderToastMessages from '../../util/order_toast_messages';
import Toaster from "./toaster";

const mapStateToProps = ({errors}) => ({
  messages: orderToastMessages(errors)
})

const mapDispatchToProps = (dispatch) => ({
  removeError: id => dispatch(RemoveError(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);