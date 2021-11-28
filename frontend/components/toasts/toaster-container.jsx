import React from "react";
import { connect } from "react-redux";
import Toaster from "./toaster";

const mapStateToProps = ({errors}) => ({
  errors: [...errors.auth, ...errors.user]
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);