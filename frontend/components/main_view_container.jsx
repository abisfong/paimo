import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ auth}) => {
  const currentUser = auth.currentUser;
  return {
    currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);