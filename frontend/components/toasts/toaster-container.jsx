import React from "react";
import { connect } from "react-redux";
import orderErrors from '../../util/order_errors';
import Toaster from "./toaster";

const mapStateToProps = ({errors}) => ({
  errors: orderErrors(errors)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);